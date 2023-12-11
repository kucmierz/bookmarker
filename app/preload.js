const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  getDirname: () => ipcRenderer.invoke("get-dirname"),
});
