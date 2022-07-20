const { app, BrowserWindow } = require("electron");
const path = require("path");

if (require("electron-squirrel-startup")) app.quit();

const createWindow = () => {
	const mainWindow = new BrowserWindow({
		width: 1000,
		height: 600,
		webPreferences: {
			nodeIntegration: true,
		},
	});

	mainWindow.loadFile(path.join("index.html"));
	mainWindow.setMenuBarVisibility(false);
};

app.on("ready", createWindow);

// eslint-disable-next-line no-undef
app.on("window-all-closed", () => process.platform !== "darwin" && app.quit());
app.on("activate", () => BrowserWindow.getAllWindows().length === 0 && createWindow());