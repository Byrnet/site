<#
.SYNOPSIS
    Восстанавливает структуру и содержимое файлов сайта из единого текстового снимка AI_Content_Snapshot.txt.
.DESCRIPTION
    Этот скрипт выполняет операцию, обратную созданию снимка. Он читает файл-снимок,
    создает необходимые папки и записывает содержимое в соответствующие файлы.
    Перед восстановлением создает резервную копию существующих данных.
#>

# ===================================================================================
#                      AI CONTENT RESTORE TOOL
# ===================================================================================

# --- КОНФИГУРАЦИЯ ---

# Путь к папке проекта. Определяется автоматически, исходя из расположения скрипта.
$projectBasePath = Split-Path -Path $MyInvocation.MyCommand.Path -Parent

# Имя файла-снимка, из которого будет происходить восстановление.
$snapshotFileName = "AI_Content_Snapshot.txt"

# Папки, которые будут забэкаплены и очищены перед восстановлением.
# Это гарантирует чистое восстановление без старых файлов.
$foldersToRestore = @(
    "content",
    "layouts",
    "data"
)

# Имя для папки с резервной копией. К нему будет добавлена дата и время.
$backupFolderNamePrefix = "content_backup"

# --- ЛОГИКА СКРИПТА (Ниже ничего редактировать не нужно) ---

$ErrorActionPreference = "Stop"

# --- Начало ---
Write-Host "--- AI Content Restore Tool ---" -ForegroundColor Yellow
Write-Host "Проект: $projectBasePath" -ForegroundColor Cyan

$snapshotFilePath = Join-Path -Path $projectBasePath -ChildPath $snapshotFileName

# 1. Проверка наличия файла-снимка
if (-not (Test-Path -Path $snapshotFilePath -PathType Leaf)) {
    Write-Host "ОШИБКА: Файл-снимок '$snapshotFileName' не найден в папке проекта." -ForegroundColor Red
    Write-Host "Сначала создайте снимок или поместите его в папку '$projectBasePath'." -ForegroundColor Red
    Start-Sleep -Seconds 15
    exit 1
}

Write-Host "OK. Файл-снимок '$snapshotFileName' найден." -ForegroundColor Green
Write-Host "--------------------------------"

# 2. Создание резервной копии
try {
    $timestamp = Get-Date -Format "yyyy-MM-dd_HHmmss"
    $backupFolderName = "$($backupFolderNamePrefix)_$timestamp"
    $backupFolderPath = Join-Path -Path $projectBasePath -ChildPath $backupFolderName
    
    New-Item -Path $backupFolderPath -ItemType Directory -Force | Out-Null
    Write-Host "Создаю резервную копию в папку: $backupFolderName" -ForegroundColor Cyan

    foreach ($folder in $foldersToRestore) {
        $sourceFolderPath = Join-Path -Path $projectBasePath -ChildPath $folder
        if (Test-Path $sourceFolderPath) {
            Write-Host "  -> Копирую '$folder'..."
            Copy-Item -Path $sourceFolderPath -Destination $backupFolderPath -Recurse -Force
            # Очистка старой папки для чистого восстановления
            Remove-Item -Path $sourceFolderPath -Recurse -Force
        }
    }
    Write-Host "Резервное копирование завершено." -ForegroundColor Green
    Write-Host "--------------------------------"
} catch {
    Write-Host "ОШИБКА при создании резервной копии: $($_.Exception.Message)" -ForegroundColor Red
    Start-Sleep -Seconds 15
    exit 1
}


# 3. Восстановление из снимка
Write-Host "Начинаю восстановление файлов из снимка..."
$allLines = Get-Content -Path $snapshotFilePath -Raw
$fileBlocks = $allLines -split '(?m)^#file: ' | Where-Object { $_.Trim() -ne "" }

$filesRestoredCount = 0

foreach ($block in $fileBlocks) {
    # Разбиваем блок на первую строку (путь к файлу) и остальное (содержимое)
    $lines = $block.Split([Environment]::NewLine, 2)
    $relativePath = $lines[0].Trim()
    $content = if ($lines.Length -gt 1) { $lines[1] } else { "" }

    if ([string]::IsNullOrWhiteSpace($relativePath)) {
        continue
    }

    $targetFilePath = Join-Path -Path $projectBasePath -ChildPath $relativePath
    $targetDirectoryPath = Split-Path -Path $targetFilePath -Parent

    try {
        # Создаем директорию, если она не существует
        if (-not (Test-Path -Path $targetDirectoryPath)) {
            New-Item -Path $targetDirectoryPath -ItemType Directory -Force | Out-Null
        }

        # Записываем содержимое в файл с кодировкой UTF-8
        # Это критически важно для корректного отображения русских букв
        Set-Content -Path $targetFilePath -Value $content.Trim() -Encoding utf8 -Force
        
        Write-Host "  -> Восстановлен: $relativePath"
        $filesRestoredCount++
    } catch {
        Write-Host "ОШИБКА при восстановлении файла '$relativePath': $($_.Exception.Message)" -ForegroundColor Red
    }
}

# 4. Отображение итоговой статистики
Write-Host "--------------------------------"
Write-Host "Восстановление контента успешно завершено!" -ForegroundColor Green
Write-Host
Write-Host "  > Восстановлено файлов: $filesRestoredCount"
Write-Host "  > Резервная копия сохранена в: $backupFolderPath"
Write-Host
Write-Host "Проверьте ваш сайт. Если что-то пошло не так, вы можете восстановить файлы из папки с резервной копией." -ForegroundColor Yellow

# Пауза для просмотра результатов
Write-Host "Это окно закроется через 15 секунд..."
Start-Sleep -Seconds 15
exit 0