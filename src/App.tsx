import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Schedule from './pages/Schedule'
import Notifications from './pages/Notifications'
import Settings from './pages/Settings'
import Clients from './pages/Clients'
import Stats from './pages/Stats'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
