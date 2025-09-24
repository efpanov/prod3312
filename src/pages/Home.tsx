import Header from '../components/Header'
import Button from '../components/Button'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <Header title="Сегодня" />
      <main className="p-4 space-y-5">
        <section className="rounded-3xl bg-white/5 border border-white/10 p-4 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.7)]">
          <div className="inline-flex items-center gap-2 text-xs text-white/80 bg-white/10 rounded-full px-3 py-1">
            <span>✂️</span>
            <span>Салон красоты</span>
          </div>
          <div className="mt-3 text-lg font-semibold">Сегодня 24 сентября</div>
          <div className="mt-1 text-xs text-white/70">У вас 2 из 8 записей на сегодня</div>
          <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full w-1/4 bg-blue-600" />
          </div>
          <div className="mt-2 text-right text-xs text-white/70">25%</div>
        </section>

        <div className="grid grid-cols-2 gap-3">
          <Button variant="primary" className="h-12">Календарь</Button>
          <Button variant="secondary" className="h-12">Новая запись</Button>
        </div>

        <section className="grid grid-cols-3 gap-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
            <div className="text-emerald-400 font-semibold">85К₽</div>
            <div className="text-xs text-white/60 mt-1">За месяц</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
            <div className="text-blue-400 font-semibold">42</div>
            <div className="text-xs text-white/60 mt-1">Клиенты</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
            <div className="text-violet-400 font-semibold">2</div>
            <div className="text-xs text-white/60 mt-1">Сегодня</div>
          </div>
        </section>

        <section className="space-y-2">
          <div className="text-sm text-white/70">Записи на сегодня</div>
          <div className="space-y-2">
            {[1,2,3].map(i => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-3 flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium">Клиент {i}</div>
                  <div className="text-xs text-white/60">Сегодня · 15:{i}0 — 16:{i}0</div>
                </div>
                <Button variant="ghost" className="border border-white/10">Подробнее</Button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  )
}


