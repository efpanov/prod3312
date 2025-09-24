import { NavLink } from 'react-router-dom'

function Tab({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          'flex-1 text-center py-3 rounded-xl transition-colors',
          isActive ? 'bg-white/10 text-white' : 'text-white/60 hover:text-white/80',
        ].join(' ')
      }
      end
    >
      {label}
    </NavLink>
  )
}

export default function BottomNav() {
  return (
    <nav className="fixed left-0 right-0 bottom-0 px-3 pb-[max(env(safe-area-inset-bottom),12px)] pt-2">
      <div className="bg-black/60 backdrop-blur border border-white/10 rounded-2xl flex gap-1 px-2">
        <Tab to="/" label="Главная" />
        <Tab to="/schedule" label="Календарь" />
        <Tab to="/clients" label="Клиенты" />
        <Tab to="/stats" label="Статистика" />
        <Tab to="/settings" label="Настройки" />
      </div>
    </nav>
  )
}


