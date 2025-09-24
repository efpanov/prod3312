import WebApp from '@twa-dev/sdk'

export function initTelegramWebApp(): void {
  try {
    WebApp.ready()
    // Request fullscreen where supported
    WebApp.expand()

    // Apply base colors depending on theme
    const applyColors = () => {
      const isDark = WebApp.colorScheme === 'dark'
      WebApp.setHeaderColor(isDark ? 'secondary_bg_color' : 'bg_color')
      WebApp.setBackgroundColor(isDark ? '#0f1115' : '#ffffff')
    }

    applyColors()
    WebApp.onEvent('themeChanged', applyColors)
  } catch (_) {
    // Running outside Telegram — safely ignore
  }
}

export function getInitDataUnsafe() {
  try {
    return WebApp.initDataUnsafe
  } catch (_) {
    return undefined
  }
}

export function closeApp() {
  try {
    WebApp.close()
  } catch (_) {
    // ignore
  }
}


