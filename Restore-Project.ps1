<#
.SYNOPSIS
    (ФИНАЛЬНАЯ ВЕРСИЯ) Восстанавливает проект из снимка в текущей папке.
    Устойчива к разным типам переносов строк.
#>

# ===================================================================================
#                      PROJECT RESTORE TOOL (FINAL VERSION)
# ===================================================================================

# --- КОНФИГУРАЦИЯ ---
$snapshotFileName = "AI_Snapshot_IndexOnly.txt"
$restoreFolderName = "Restored_Project"

# --- ЛОГИКА СКРИПТА ---
$ErrorActionPreference = "Stop"

$snapshotFilePath = ".\$snapshotFileName"
$restoreBasePath = ".\$restoreFolderName"

Write-Host "--- Project Restore Tool ---" -ForegroundColor Yellow
Write-Host "Работаю в текущей папке: $(Get-Location)"
Write-Host "Ищу файл-снимок: $snapshotFilePath"
Write-Host "Папка для восстановления: $restoreBasePath"
Write-Host "--------------------------------"

if (-not (Test-Path -Path $snapshotFilePath -PathType Leaf)) {
    Write-Host "ОШИБКА: Файл-снимок '$snapshotFileName' не найден в текущей папке." -ForegroundColor Red
    Start-Sleep -Seconds 10
    exit 1
}

if (Test-Path -Path $restoreBasePath) {
    Write-Host "ВНИМАНИЕ: Папка '$restoreFolderName' уже существует." -ForegroundColor Yellow
    $choice = Read-Host "Хотите полностью удалить её и начать восстановление заново? (y/n)"
    if ($choice.ToLower() -ne 'y') {
        Write-Host "Восстановление отменено." -ForegroundColor Red
        Start-Sleep -Seconds 5
        exit 0
    }
    Write-Host "Удаляю старую папку..."
    Remove-Item -Path $restoreBasePath -Recurse -Force
}

New-Item -Path $restoreBasePath -ItemType Directory -Force | Out-Null
Write-Host "OK. Начинаю восстановление..." -ForegroundColor Green

# --- ИСПРАВЛЕННАЯ ЛОГИКА ЧТЕНИЯ ---
$snapshotContent = Get-Content -Path $snapshotFilePath -Raw
# Используем более надежный оператор -split, который понимает разные переносы строк (\r?\n)
$fileBlocks = $snapshotContent -split '\r?\n#file: ' | Select-Object -Skip 1
# --- КОНЕЦ ИСПРАВЛЕНИЙ ---

$filesRestoredCount = 0

foreach ($block in $fileBlocks) {
    $lines = $block.Trim() -split "`r?`n"
    $relativePath = $lines[0].Trim()
    
    if ([string]::IsNullOrWhiteSpace($relativePath)) { continue }

    $fileContent = $block.Substring($relativePath.Length).TrimStart()
    $fullDestPath = Join-Path -Path $restoreBasePath -ChildPath $relativePath
    $destDir = Split-Path -Path $fullDestPath -Parent

    if (-not (Test-Path -Path $destDir)) {
        New-Item -ItemType Directory -Path $destDir -Force | Out-Null
    }

    Set-Content -Path $fullDestPath -Value $fileContent -Encoding Utf8
    
    Write-Host "  > Восстановлен файл: $relativePath"
    $filesRestoredCount++
}

Write-Host "--------------------------------"
Write-Host "Проект успешно восстановлен!" -ForegroundColor Green
Write-Host
Write-Host "  > Всего восстановлено файлов: $filesRestoredCount"
Write-Host "  > Проект находится в папке: $restoreBasePath"
Write-Host

Write-Host "Это окно закроется через 15 секунд..."
Start-Sleep -Seconds 15
exit 0