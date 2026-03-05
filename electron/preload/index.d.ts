declare global {
  interface Window {
    app: {
      getVersion: () => Promise<string>
    }
  }
}
