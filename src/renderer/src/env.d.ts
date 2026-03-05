/// <reference types="vite/client" />

interface Window {
  app: {
    getVersion: () => Promise<string>
  }
}
