import Header from '../components/Header'
import Layout from '../components/Layout'

export default function Settings() {
  return (
    <Layout>
      <Header title="Настройки" />
      <main className="p-4 space-y-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="text-sm">Организация</div>
          <div className="text-xs text-white/60">САЛОН КРАСОТЫ · Ножницы</div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="text-sm">Профиль мастера</div>
          <div className="text-xs text-white/60">Мария Мастер · Парикмахер</div>
        </div>
      </main>
    </Layout>
  )
}


