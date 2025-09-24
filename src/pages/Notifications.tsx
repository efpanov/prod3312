import Header from '../components/Header'

export default function Notifications() {
  return (
    <div className="min-h-full bg-neutral-950 text-white pb-20">
      <Header title="Уведомления" />
      <main className="p-4 space-y-3">
        {[5,10,30,60].map(min => (
          <label key={min} className="flex items-center gap-3 p-3 rounded-2xl border border-white/10 bg-white/5">
            <input type="checkbox" className="accent-blue-500" defaultChecked={min===10} />
            <span className="text-sm">За {min} мин до события</span>
          </label>
        ))}
      </main>
    </div>
  )
}


