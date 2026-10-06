import os
import stat
import time
import shutil

path = r"C:\Users\prest\proyectos\ENVOS0~1"

def remove_readonly(func, path, excinfo):
    os.chmod(path, stat.S_IWRITE)
    func(path)

# Try multiple times
for attempt in range(5):
    try:
        shutil.rmtree(path, onerror=remove_readonly)
        print(f"Success on attempt {attempt+1}")
        break
    except PermissionError as e:
        print(f"Attempt {attempt+1} failed: {e}")
        time.sleep(1)
    except Exception as e:
        print(f"Error: {e}")
        break
else:
    print("All attempts failed")

# Check if it still exists
if os.path.exists(path):
    print("Directory still exists")
    # Try to list contents
    try:
        for root, dirs, files in os.walk(path):
            for f in files:
                print(f"File: {os.path.join(root, f)}")
    except Exception as e:
        print(f"Walk error: {e}")
else:
    print("Directory removed successfully")