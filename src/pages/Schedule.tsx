import Header from '../components/Header'
import Layout from '../components/Layout'

export default function Schedule() {
  return (
    <Layout>
      <Header title="Календарь" />
      <main className="p-4 space-y-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white/80">Список слотов дня (пример)</div>
        {[9,11,15,17].map((h,i)=> (
          <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-4 flex items-center justify-between">
            <div>
              <div className="text-sm">{String(h).padStart(2,'0')}:00</div>
              <div className="text-xs text-white/60">Свободно — нажмите для записи</div>
            </div>
            <div className="text-sm font-medium">{i%2?`${1500+i*100}₽`:'—'}</div>
          </div>
        ))}
      </main>
    </Layout>
  )
}


