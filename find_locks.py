import ctypes
import ctypes.wintypes
import os

# Windows Restart Manager API
RmStartSession = ctypes.windll.Rstrtmgr.RmStartSession
RmEndSession = ctypes.windll.Rstrtmgr.RmEndSession
RmRegisterResources = ctypes.windll.Rstrtmgr.RmRegisterResources
RmGetList = ctypes.windll.Rstrtmgr.RmGetList
RmShutdown = ctypes.windll.Rstrtmgr.RmShutdown

# Constants
ERROR_SUCCESS = 0
ERROR_MORE_DATA = 234
RmForceShutdown = 0x1

# Types
DWORD = ctypes.wintypes.DWORD
WCHAR = ctypes.c_wchar
HANDLE = ctypes.c_void_p
LPCWSTR = ctypes.c_wchar_p

# RmStartSession
RmStartSession.argtypes = [ctypes.POINTER(DWORD), DWORD, LPCWSTR]
RmStartSession.restype = DWORD

# RmEndSession
RmEndSession.argtypes = [DWORD]
RmEndSession.restype = DWORD

# RmRegisterResources
RmRegisterResources.argtypes = [DWORD, DWORD, ctypes.POINTER(LPCWSTR), DWORD, ctypes.c_void_p, DWORD, ctypes.c_void_p]
RmRegisterResources.restype = DWORD

# RmGetList
class RM_PROCESS_INFO(ctypes.Structure):
    _fields_ = [
        ("Process", ctypes.wintypes.DWORD),
        ("AppStatus", DWORD),
        ("TSSessionId", DWORD),
        ("strAppName", WCHAR * 256),
        ("strServiceShortName", WCHAR * 64),
        ("ApplicationType", DWORD),
    ]

RmGetList.argtypes = [DWORD, ctypes.POINTER(DWORD), ctypes.POINTER(DWORD), ctypes.POINTER(RM_PROCESS_INFO), ctypes.POINTER(DWORD)]
RmGetList.restype = DWORD

# RmShutdown
RmShutdown.argtypes = [DWORD, DWORD, ctypes.c_void_p]
RmShutdown.restype = DWORD

def get_locking_processes(path):
    session_handle = DWORD(0)
    session_key = ctypes.create_unicode_buffer(32)
    
    # Start session
    result = RmStartSession(ctypes.byref(session_handle), 0, session_key)
    if result != ERROR_SUCCESS:
        print(f"Failed to start session: {result}")
        return []
    
    try:
        # Register the resource
        path_ptr = LPCWSTR(path)
        result = RmRegisterResources(session_handle, 1, ctypes.byref(path_ptr), 0, None, 0, None)
        if result != ERROR_SUCCESS:
            print(f"Failed to register resources: {result}")
            return []
        
        # Get list of processes
        pn_proc_info_needed = DWORD(0)
        pn_proc_info = DWORD(0)
        lpdw_reboot_reasons = DWORD(0)
        
        result = RmGetList(session_handle, ctypes.byref(pn_proc_info_needed), ctypes.byref(pn_proc_info), None, ctypes.byref(lpdw_reboot_reasons))
        if result == ERROR_MORE_DATA:
            # Allocate buffer
            proc_infos = (RM_PROCESS_INFO * pn_proc_info_needed.value)()
            pn_proc_info = DWORD(pn_proc_info_needed.value)
            result = RmGetList(session_handle, ctypes.byref(pn_proc_info_needed), ctypes.byref(pn_proc_info), proc_infos, ctypes.byref(lpdw_reboot_reasons))
            if result != ERROR_SUCCESS:
                print(f"Failed to get list: {result}")
                return []
            
            processes = []
            for i in range(pn_proc_info.value):
                proc = proc_infos[i]
                processes.append({
                    'pid': proc.Process,
                    'name': proc.strAppName,
                    'type': proc.ApplicationType
                })
            return processes
        else:
            print(f"RmGetList failed: {result}")
            return []
    finally:
        RmEndSession(session_handle)

if __name__ == "__main__":
    path = r"C:\Users\prest\proyectos\Envíos0DosRuedasdiseñooctubre"
    print(f"Checking locks on: {path}")
    processes = get_locking_processes(path)
    if processes:
        for p in processes:
            print(f"PID: {p['pid']}, Name: {p['name']}, Type: {p['type']}")
    else:
        print("No locking processes found (or API failed)")