import ctypes
import ctypes.wintypes

# MoveFileEx with MOVEFILE_DELAY_UNTIL_REBOOT
MoveFileEx = ctypes.windll.kernel32.MoveFileExW
MoveFileEx.argtypes = [ctypes.c_wchar_p, ctypes.c_wchar_p, ctypes.wintypes.DWORD]
MoveFileEx.restype = ctypes.wintypes.BOOL

MOVEFILE_DELAY_UNTIL_REBOOT = 0x4

path = r"C:\Users\prest\proyectos\Envíos0DosRuedasdiseñooctubre"

result = MoveFileEx(path, None, MOVEFILE_DELAY_UNTIL_REBOOT)
if result:
    print(f"SUCCESS: Directory scheduled for deletion on next reboot")
else:
    error = ctypes.GetLastError()
    print(f"FAILED: Error code {error}")

# Verify
import os
if os.path.exists(path):
    print("Directory still exists (will be deleted on reboot)")
else:
    print("Directory already gone")