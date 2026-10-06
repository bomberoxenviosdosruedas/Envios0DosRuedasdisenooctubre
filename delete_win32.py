import os
import win32file
import win32con
import pywintypes

path = r"C:\Users\prest\proyectos\Envíos0DosRuedasdiseñooctubre"

# Try to use CreateFile with FILE_FLAG_DELETE_ON_CLOSE
try:
    handle = win32file.CreateFile(
        path,
        win32con.DELETE | 0x80,  # FILE_READ_ATTRIBUTES = 0x80
        win32con.FILE_SHARE_READ | win32con.FILE_SHARE_WRITE | win32con.FILE_SHARE_DELETE,
        None,
        win32con.OPEN_EXISTING,
        win32con.FILE_FLAG_BACKUP_SEMANTICS | win32con.FILE_FLAG_DELETE_ON_CLOSE,
        None
    )
    print(f"Handle created: {handle}")
    win32file.CloseHandle(handle)
    print("Directory marked for deletion on close")
except pywintypes.error as e:
    print(f"CreateFile error: {e}")
    # Try alternative
    try:
        handle = win32file.CreateFile(
            path,
            win32con.GENERIC_READ | win32con.GENERIC_WRITE | win32con.DELETE,
            win32con.FILE_SHARE_READ | win32con.FILE_SHARE_WRITE | win32con.FILE_SHARE_DELETE,
            None,
            win32con.OPEN_EXISTING,
            win32con.FILE_FLAG_BACKUP_SEMANTICS | win32con.FILE_FLAG_DELETE_ON_CLOSE,
            None
        )
        print(f"Handle created (alt): {handle}")
        win32file.CloseHandle(handle)
        print("Directory marked for deletion on close (alt)")
    except pywintypes.error as e2:
        print(f"CreateFile error (alt): {e2}")