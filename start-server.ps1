# Simple HTTP Server for Windows PowerShell
# This script starts a local web server on port 8080

Write-Host "Starting local web server on http://localhost:8080" -ForegroundColor Green
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""

# Check if Python is available
$python = Get-Command python -ErrorAction SilentlyContinue
if ($python) {
    Write-Host "Using Python HTTP server..." -ForegroundColor Cyan
    python -m http.server 8080
} else {
    # Check if Node.js is available
    $node = Get-Command node -ErrorAction SilentlyContinue
    if ($node) {
        Write-Host "Using Node.js http-server via npx..." -ForegroundColor Cyan
        npx http-server -p 8080
    } else {
        Write-Host "Error: Neither Python nor Node.js found!" -ForegroundColor Red
        Write-Host "Please install Python or Node.js to run a local server." -ForegroundColor Yellow
        Write-Host ""
        Write-Host "Alternatively, you can:" -ForegroundColor Yellow
        Write-Host "1. Use the 'Launch Chrome - Open HTML File' option in VS Code debugger" -ForegroundColor Cyan
        Write-Host "2. Install VS Code 'Live Server' extension" -ForegroundColor Cyan
        Write-Host "3. Right-click index.html and select 'Open with Live Server'" -ForegroundColor Cyan
        exit 1
    }
}
