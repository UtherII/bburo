const { app, BrowserWindow } = require('electron')
const path = require('path')

console.log("Démarrage de BBURO...");

function createWindow () {
  const win = new BrowserWindow({
    
    width: 1920,
    height: 1080,    
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  win.setMenuBarVisibility(false);
  win.loadFile('index.html');
  win.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
