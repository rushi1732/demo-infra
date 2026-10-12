$port = 3000
$tcp = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Loopback, $port)
$tcp.Start()
Write-Host "Server running at http://localhost:$port/"

try {
    while ($true) {
        $client = $tcp.AcceptTcpClient()
        $stream = $client.GetStream()
        
        $buf = New-Object byte[] 4096
        $read = $stream.Read($buf, 0, $buf.Length)
        
        if ($read -gt 0) {
            $req = [System.Text.Encoding]::ASCII.GetString($buf, 0, $read)
            $firstLine = ($req -split "`r`n")[0]
            $parts = $firstLine -split ' '
            
            if ($parts.Length -ge 2) {
                $rawPath = $parts[1].Split('?')[0].TrimStart('/')
                if ($rawPath -eq '' -or $rawPath -eq '/') {
                    $rawPath = 'index.html'
                }
                
                $filePath = Join-Path $PSScriptRoot $rawPath
                
                if (Test-Path $filePath -PathType Leaf) {
                    $bytes = [System.IO.File]::ReadAllBytes($filePath)
                    $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
                    
                    $mime = switch ($ext) {
                        '.html' { 'text/html; charset=utf-8' }
                        '.css'  { 'text/css; charset=utf-8' }
                        '.js'   { 'application/javascript; charset=utf-8' }
                        '.jpg'  { 'image/jpeg' }
                        '.jpeg' { 'image/jpeg' }
                        '.png'  { 'image/png' }
                        '.svg'  { 'image/svg+xml' }
                        default { 'application/octet-stream' }
                    }
                    
                    $header = "HTTP/1.1 200 OK`r`nContent-Type: $mime`r`nContent-Length: $($bytes.Length)`r`nConnection: close`r`n`r`n"
                    $headerBytes = [System.Text.Encoding]::ASCII.GetBytes($header)
                    $stream.Write($headerBytes, 0, $headerBytes.Length)
                    $stream.Write($bytes, 0, $bytes.Length)
                    $stream.Flush()
                } else {
                    $msg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
                    $header = "HTTP/1.1 404 Not Found`r`nContent-Type: text/plain`r`nContent-Length: $($msg.Length)`r`nConnection: close`r`n`r`n"
                    $headerBytes = [System.Text.Encoding]::ASCII.GetBytes($header)
                    $stream.Write($headerBytes, 0, $headerBytes.Length)
                    $stream.Write($msg, 0, $msg.Length)
                    $stream.Flush()
                }
            }
        }
        $stream.Close()
        $client.Close()
    }
} finally {
    $tcp.Stop()
}
