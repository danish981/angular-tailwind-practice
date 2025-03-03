Great! I’ll walk you through downloading the YouTube video at `https://youtu.be/2Yq3za3qIp0` using **yt-dlp**, a powerful and open-source tool. It’s command-line based, but don’t worry—I’ll make it simple and clear. Here’s the step-by-step process:

---

### Step 1: Install yt-dlp
Depending on your operating system, here’s how to get yt-dlp installed:

#### Windows
1. **Download yt-dlp**:
    - Go to [github.com/yt-dlp/yt-dlp/releases](https://github.com/yt-dlp/yt-dlp/releases).
    - Scroll to the latest release and download `yt-dlp.exe` under "Assets."
2. **Place the File**:
    - Move `yt-dlp.exe` to a folder like `C:\Users\YourName\Downloads` or anywhere you can easily access it.
3. **Optional - Add to PATH** (simplifies usage):
    - Right-click "This PC" > "Properties" > "Advanced system settings" > "Environment Variables."
    - Under "System Variables," find "Path," click "Edit," and add the folder path (e.g., `C:\Users\YourName\Downloads`).
    - This lets you run `yt-dlp` from any command prompt without navigating to its folder.

#### macOS/Linux
1. **Install via Homebrew** (macOS) or Package Manager (Linux):
    - Open Terminal.
    - If you have Homebrew (macOS): `brew install yt-dlp`.
    - On Ubuntu/Debian: `sudo apt install yt-dlp`.
    - On Fedora: `sudo dnf install yt-dlp`.
2. **Alternative - Manual Install**:
    - Download the executable from the GitHub releases page (look for `yt-dlp` or `yt-dlp_linux`).
    - Make it executable: `chmod +x yt-dlp` in Terminal.
    - Move it to a system path: `sudo mv yt-dlp /usr/local/bin/`.

#### Verify Installation
- Open a terminal (Command Prompt on Windows, Terminal on macOS/Linux).
- Type `yt-dlp --version`. If it shows a version number (e.g., `2023.12.30`), you’re good to go!

---

### Step 2: Download the Video
Now, let’s download the video `https://youtu.be/2Yq3za3qIp0` in high quality with audio.

1. **Open Terminal/Command Prompt**:
    - Windows: Press `Win + R`, type `cmd`, and hit Enter.
    - macOS/Linux: Open Terminal from your applications.

2. **Navigate to yt-dlp Folder (Windows Only, if not in PATH)**:
    - If you didn’t add yt-dlp to PATH, use:  
      `cd C:\Users\YourName\Downloads` (replace with your folder).

3. **Basic Command**:
    - Run this command to download the video with the best available video and audio combined:
      ```
      yt-dlp -f "bestvideo+bestaudio/best" https://youtu.be/2Yq3za3qIp0
      ```
    - **Explanation**:
        - `-f "bestvideo+bestaudio/best"`: Merges the best video and audio streams into one file (usually MP4). If a pre-merged file exists, it uses that.
        - The downloaded file will be saved in your current directory (e.g., Downloads folder).

4. **Check Progress**:
    - You’ll see a progress bar in the terminal showing the download status.

---

### Step 3: Customize (Optional)
Want more control? Here are some tweaks:

- **Specific Quality**:
    - To force 1080p (if available):
      ```
      yt-dlp -f "bestvideo[height<=1080]+bestaudio/best" https://youtu.be/2Yq3za3qIp0
      ```
    - For 4K (if the video supports it):
      ```
      yt-dlp -f "bestvideo[height<=2160]+bestaudio/best" https://youtu.be/2Yq3za3qIp0
      ```

- **Output File Name**:
    - To name the file something specific (e.g., "MyVideo.mp4"):
      ```
      yt-dlp -f "bestvideo+bestaudio/best" -o "MyVideo.%(ext)s" https://youtu.be/2Yq3za3qIp0
      ```

- **See Available Formats**:
    - Curious about what resolutions are available? Run:
      ```
      yt-dlp -F https://youtu.be/2Yq3za3qIp0
      ```
    - This lists all formats (e.g., 1080p, 720p). Pick a format code (like `137` for 1080p video) and use it with `-f`, e.g., `-f 137+140`.

---

### Step 4: Verify the Download
- Once complete, check your folder (e.g., Downloads). The file should be an MP4 with both video and audio.
- Open it in a media player (like VLC) to confirm it’s high quality.

---

### Troubleshooting
- **No Audio?**: Ensure you’re using `bestvideo+bestaudio`. Some formats (like DASH) split video and audio, and yt-dlp needs to merge them.
- **Error?**: Update yt-dlp with `yt-dlp -U`—YouTube often changes its structure, and updates fix compatibility.
- **Dependencies**: yt-dlp may need `ffmpeg` for merging video/audio. Install it:
    - Windows: Download from [ffmpeg.org](https://ffmpeg.org/download.html) and add to PATH.
    - macOS: `brew install ffmpeg`.
    - Linux: `sudo apt install ffmpeg`.

---

That’s it! For your video `https://youtu.be/2Yq3za3qIp0`, the simplest command—`yt-dlp -f "bestvideo+bestaudio/best" https://youtu.be/2Yq3za3qIp0`—should give you a high-quality MP4 with audio. Let me know if you hit any snags or want help with a specific tweak!