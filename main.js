const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    fullscreen: true,
    autoHideMenuBar: true,
    icon: path.join(__dirname, "icon.ico"),
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  // Load your website
  win.loadURL("https://www.2aclassweb.com/");

  // Remove menu bar completely
  Menu.setApplicationMenu(null);

  // Disable right-click
  win.webContents.on("context-menu", (e) => {
    e.preventDefault();
  });

  // Optional: prevent opening dev tools
  win.webContents.on("devtools-opened", () => {
    win.webContents.closeDevTools();
  });
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});