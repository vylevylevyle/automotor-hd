# VYLE - AUTO/MOTOR Electron App Setup

## 🎮 Platform Compatibility

**✅ Windows PC** - Full support with controller/keyboard navigation
**✅ Steam Deck** - Optimized for handheld gaming, touch controls, and gamepad input
**✅ Linux** - Native AppImage and .deb packages
**✅ macOS** - Universal binary support

## 📦 Quick Setup

1. **Create Project Directory**
   ```bash
   mkdir vyle-automotor
   cd vyle-automotor
   ```

2. **Save the Files**
   - Save the HTML artifact as `index.html`
   - Save the package.json as `package.json`
   - Save the main.js as `main.js`

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Run the App**
   ```bash
   npm start
   ```

## 🏗️ Building for Distribution

### Windows (Steam Compatible)
```bash
npm run build-win
```
Creates: `dist/VYLE - AUTO_MOTOR Setup.exe`

### Linux (Steam Deck)
```bash
npm run build-linux
```
Creates: 
- `dist/VYLE - AUTO_MOTOR.AppImage`
- `dist/vyle-automotor_1.0.0_amd64.deb`

### macOS
```bash
npm run build-mac
```
Creates: `dist/VYLE - AUTO_MOTOR.dmg`

## 🎮 Steam Integration

### Adding to Steam (Windows/Linux)

1. **Open Steam**
2. **Games Menu** → **Add a Non-Steam Game to My Library**
3. **Browse** → Select your built executable
4. **Right-click** the game in your library → **Properties**
5. **Set Launch Options** (optional):
   ```
   --fullscreen
   ```

### Steam Deck Specific Setup

1. **Desktop Mode**: Install the .deb package or use AppImage
2. **Gaming Mode**: Add via "Add Non-Steam Game"
3. **Controller Config**: 
   - Steam Input handles all gamepad controls automatically
   - Touch controls work natively
   - Virtual keyboard available for any text input

### Steam Controller Bindings

The app supports these controls out of the box:
- **D-Pad/Left Stick**: Navigate menu
- **A Button**: Select track
- **B Button/Back**: Return to menu
- **Menu Button**: Fullscreen toggle
- **Start Button**: Exit app

## 🎨 Asset Requirements

Create an `assets` folder with icons:
- `icon.png` (512x512 for Linux)
- `icon.ico` (Windows)
- `icon.icns` (macOS)

## 🔧 Steam Deck Optimizations

The app includes Steam Deck specific optimizations:
- **Hardware Acceleration**: Enabled for smooth performance
- **GPU Rasterization**: Better rendering performance
- **Fullscreen Support**: F11 or controller menu button
- **Touch Navigation**: All UI elements are touch-friendly
- **Controller Support**: Native gamepad navigation

## 📋 File Structure
```
vyle-automotor/
├── index.html          # Main app interface
├── main.js            # Electron main process
├── package.json       # Dependencies and build config
├── assets/            # Icons and media
│   ├── icon.png
│   ├── icon.ico
│   └── icon.icns
└── dist/              # Built applications
```

## 🚀 Performance Tips

- **Steam Deck**: The app is optimized for 1280x800 resolution
- **Battery Life**: Uses efficient CSS animations and minimal background processes
- **Loading**: Web pages load in embedded iframe for seamless experience
- **Memory**: Lightweight design with minimal resource usage

## 🎯 Steam Store Preparation

If you want to distribute on Steam:
1. **Steamworks SDK**: Integrate achievements, cloud saves, etc.
2. **Steam Rich Presence**: Show current track in Steam friends list
3. **Steam Workshop**: Allow custom themes/backgrounds
4. **Steam Achievements**: Track listening milestones

## 🔧 Troubleshooting

**Steam Deck Black Screen**: Try adding `--disable-gpu-sandbox` to launch options
**Windows Antivirus**: The built .exe might trigger false positives - add exclusion
**Linux Permissions**: Make AppImage executable with `chmod +x`

## 📱 Additional Features

The app includes:
- **Offline Capable**: Works without internet (except for loading web pages)
- **Keyboard Shortcuts**: Full keyboard navigation
- **Accessibility**: Screen reader compatible
- **Multi-Platform**: Consistent experience across all devices

Ready to launch on Steam! 🎮
