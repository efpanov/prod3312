import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { initTelegramWebApp } from './lib/telegram.ts'

// Initialize Telegram WebApp SDK as early as possible
initTelegramWebApp()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
