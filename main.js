const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  let iconFilename;

  switch (process.platform) {
    case 'win32':
      iconFilename = 'am_hd_icon-windows.ico';
      break;
    case 'darwin':
      iconFilename = 'am_hd_icon-mac.icns';
      break;
    default:
      iconFilename = 'am_hd_icon-default.png';
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
