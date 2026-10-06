$files = Get-ChildItem 'C:\Users\prest\proyectos\Envíos0DosRuedasdiseñooctubre\ui_kits\website' -Recurse -File
foreach ($f in $files) {
    try {
        $stream = [System.IO.File]::Open($f.FullName, 'OpenOrCreate', 'ReadWrite', 'None')
        $stream.Close()
        Write-Host "OK: $($f.Name)"
    } catch {
        Write-Host "LOCKED: $($f.Name) - $($_.Exception.Message)"
    }
}