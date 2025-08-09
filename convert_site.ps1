$folder = "D:\github\bynet\site"
$outputFile = "site_code.txt"

# Очистка или создание выходного файла
"" | Out-File -FilePath $outputFile -Encoding utf8

Write-Output "Collecting site code from $folder..." | Add-Content -Path $outputFile

# Рекурсивный обход всех файлов
Get-ChildItem -Path $folder -Recurse -File | ForEach-Object {
    $filePath = $_.FullName
    "File: $filePath" | Add-Content -Path $outputFile
    "" | Add-Content -Path $outputFile
    Get-Content -Path $filePath -Raw | Add-Content -Path $outputFile
    "" | Add-Content -Path $outputFile
    "==============================" | Add-Content -Path $outputFile
    "" | Add-Content -Path $outputFile
}

Write-Output "Done! Output saved to $outputFile."