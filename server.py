#!/usr/bin/env python3
import http.server
import socketserver
import os

PORT = 3000
DIRECTORY = r"C:\Users\prest\proyectos\enviosdosruedasdisenooctubre\ui_kits\website"

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)
    
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

if __name__ == "__main__":
    os.chdir(DIRECTORY)
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"Serving at http://localhost:{PORT}")
        print(f"Directory: {DIRECTORY}")
        httpd.serve_forever()