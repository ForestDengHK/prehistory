import os
import subprocess
import glob

# Configuration
DIRECTORY = 'public/images'
TARGET_WIDTH = 1920
QUALITY = 80

# Find all webp files recursively
files = glob.glob(os.path.join(DIRECTORY, '**', '*.webp'), recursive=True)
count = 0

print(f"Scanning {DIRECTORY} recursively for optimization (Resize to {TARGET_WIDTH}px, Q={QUALITY})...")

for file_path in files:
    try:
        # Check if it's a file
        if not os.path.isfile(file_path):
            continue
            
        size = os.path.getsize(file_path)
        
        # Optional: Skipping small files to save time/risk, e.g. < 200KB
        # But user wants "reasonable", so if it's already small, maybe skip.
        if size < 200 * 1024:
            continue
            
        print(f"Optimizing {os.path.relpath(file_path, DIRECTORY)} ({size/1024/1024:.2f} MB)...")
        temp_path = file_path + ".tmp.webp"
        
        cmd = ["cwebp", "-q", str(QUALITY), "-resize", str(TARGET_WIDTH), "0", "-mt", file_path, "-o", temp_path]
        
        result = subprocess.run(cmd, check=False, capture_output=True, text=True)
        
        if result.returncode != 0:
            print(f"  -> Error executing cwebp: {result.stderr}")
            if os.path.exists(temp_path):
                os.remove(temp_path)
            continue

        if os.path.exists(temp_path):
            new_size = os.path.getsize(temp_path)
            if new_size < size:
                os.replace(temp_path, file_path)
                print(f"  -> Success: Optimized to {new_size/1024:.2f} KB ({(1 - new_size/size)*100:.1f}% reduction)")
                count += 1
            else:
                print(f"  -> Warning: New file ({new_size}) is not smaller than original ({size}), discarding.")
                os.remove(temp_path)
        else:
            print("  -> Error: Output file was not created.")

    except Exception as e:
        print(f"Failed to optimize {file_path}: {e}")
        temp_path = file_path + ".tmp.webp"
        if os.path.exists(temp_path):
            os.remove(temp_path)

print(f"Optimization complete. Optimized {count} files.")
