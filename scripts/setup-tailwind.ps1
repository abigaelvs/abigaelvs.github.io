param([string]$Version = '4.3.5', [switch]$Force)
$ErrorActionPreference = 'Stop'
[Net.ServicePointManager]::SecurityProtocol = 'Tls12'

$root = Split-Path $PSScriptRoot -Parent
$tools = Join-Path $root '.tools'
$exe = Join-Path $tools 'tailwindcss.exe'
if (-not (Test-Path $tools)) { New-Item -ItemType Directory -Path $tools | Out-Null }
if ((Test-Path $exe) -and -not $Force) { Write-Host "Already present: $exe (use -Force to re-download)"; exit 0 }

$base = "https://github.com/tailwindlabs/tailwindcss/releases/download/v$Version"
$tmp = Join-Path $tools 'tailwindcss.download.tmp'
$sums = Join-Path $tools 'sha256sums.txt'
Invoke-WebRequest -UseBasicParsing -Uri "$base/tailwindcss-windows-x64.exe" -OutFile $tmp
Invoke-WebRequest -UseBasicParsing -Uri "$base/sha256sums.txt" -OutFile $sums

$line = Get-Content $sums | Where-Object { $_ -match 'tailwindcss-windows-x64\.exe$' } | Select-Object -First 1
if (-not $line) { Remove-Item $tmp, $sums -Force; throw 'No checksum line for tailwindcss-windows-x64.exe' }
$expected = ($line -split '\s+')[0]
$actual = (Get-FileHash -Algorithm SHA256 $tmp).Hash
if ($expected -ine $actual) { Remove-Item $tmp, $sums -Force; throw "Checksum mismatch: expected $expected, got $actual" }

Move-Item $tmp $exe -Force
Remove-Item $sums -Force
& $exe --help | Select-Object -First 1
