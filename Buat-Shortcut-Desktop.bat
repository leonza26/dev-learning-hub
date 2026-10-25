@echo off
title Pembuat Shortcut Desktop - Dev Learning Hub
echo Membuat shortcut "Dev Learning Hub" di Desktop Anda...

set "TARGET_HTML=%~dp0index.html"
set "WORK_DIR=%~dp0"

powershell -NoProfile -ExecutionPolicy Bypass -Command "$WshShell = New-Object -ComObject WScript.Shell; $DesktopPath = [Environment]::GetFolderPath('Desktop'); $Shortcut = $WshShell.CreateShortcut((Join-Path $DesktopPath 'Dev Learning Hub.lnk')); $Shortcut.TargetPath = $env:TARGET_HTML; $Shortcut.WorkingDirectory = $env:WORK_DIR; $Shortcut.IconLocation = 'shell32.dll,13'; $Shortcut.Description = 'Buka Dev Learning Command Center (Golang, React TS, Next.js, .NET)'; $Shortcut.Save()"

if %ERRORLEVEL% EQU 0 (
    echo.
    echo [BERHASIL] Shortcut "Dev Learning Hub" sudah muncul di Desktop Anda!
    echo Sekarang Anda bisa membukanya kapan saja hanya dengan klik 2x dari Desktop.
) else (
    echo.
    echo [GAGAL] Terjadi kesalahan saat membuat shortcut.
)
pause
