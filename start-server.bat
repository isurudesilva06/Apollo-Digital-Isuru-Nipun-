@echo off
echo Starting local web server on http://localhost:8080
echo Press Ctrl+C to stop the server
echo.

where python >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo Using Python...
    python -m http.server 8080
) else (
    where npx >nul 2>nul
    if %ERRORLEVEL% EQU 0 (
        echo Python not found. Using Node.js http-server...
        npx http-server -p 8080
    ) else (
        echo Error: Neither Python nor Node.js found!
        echo Please install Python or Node.js to run a local server.
        pause
    )
)
pause
