import Header from '../components/Header'
import Layout from '../components/Layout'

export default function Clients() {
  return (
    <Layout>
      <Header title="Клиенты" />
      <main className="p-4 space-y-3">
        {[{n:'Елена Петрова', p:'+7 (999) 123-45-67', s:'Маникюр', price:'1500₽'},{n:'Игорь Дмитриев', p:'+7 (987) 654-32-10', s:'Стрижка', price:'2000₽'}].map((c)=> (
          <div key={c.n} className="rounded-2xl border border-white/10 bg-white/5 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center">{c.n.split(' ').map(w=>w[0]).join('')}</div>
              <div>
                <div className="text-sm font-medium">{c.n}</div>
                <div className="text-xs text-white/60">{c.p}</div>
                <div className="text-xs text-white/60">{c.s}</div>
              </div>
            </div>
            <div className="text-sm bg-white/10 rounded-full px-3 py-1">{c.price}</div>
          </div>
        ))}
      </main>
    </Layout>
  )
}


