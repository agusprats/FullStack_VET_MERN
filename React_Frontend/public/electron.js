const {app, BrowserWindow }= require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

let appWindow;

function crearVentana(){

appWindow = new BrowserWindow({
    width: 1400,
    minWidth: 800,
    minHeight: 600,
    center: true,
    show: false,
    resizable: true,
    icon: 'icon.png',
    height: 800
});
appWindow.loadURL(
    isDev
    ? 'http://localhost:3000'
    :  `file://${path.join(__dirname, "../build/index.html")}`
);

//Cuando la app este lista para verse

appWindow.once('ready-to-show', () => {
    appWindow.show();
})
}

app.on('ready', crearVentana);
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit();
    }
})

app.on('activate', () => {
    if(appWindow === null) {
        crearVentana();
    }
})