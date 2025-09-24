import Header from '../components/Header'
import Layout from '../components/Layout'

export default function Stats() {
  return (
    <Layout>
      <Header title="Статистика" />
      <main className="p-4 space-y-4">
        {[{title:'Доход за месяц', value:'85 000₽', color:'bg-emerald-500', progress:'w-3/4'}, {title:'Доход за год', value:'950 000₽', color:'bg-blue-500', progress:'w-2/3'}].map((c)=> (
          <div key={c.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-sm text-white/80">{c.title}</div>
            <div className="text-2xl font-semibold mt-1">{c.value}</div>
            <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
              <div className={`h-full ${c.color} ${c.progress}`}></div>
            </div>
          </div>
        ))}
      </main>
    </Layout>
  )
}


