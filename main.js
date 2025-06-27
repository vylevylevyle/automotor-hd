const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  let iconFilename;

  switch (process.platform) {
    case 'win32':
      iconFilename = 'automotor_hd_icon_pc.ico';
      break;
    case 'darwin':
      iconFilename = 'automotor_hd_icon_mac.icns';
      break;
    default:
      iconFilename = 'automotor_hd_icon_linux.png';
      break;
  }

  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    icon: path.join(__dirname, 'assets', 'icons', iconFilename),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
