import { contextBridge, ipcRenderer } from 'electron'

const appApi = {
  getVersion: (): Promise<string> => ipcRenderer.invoke('app:getVersion')
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('app', appApi)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.app = appApi
}
