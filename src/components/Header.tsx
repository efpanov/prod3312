export default function Header({ title }: { title: string }) {
  return (
    <header className="sticky top-0 z-10 h-14 flex items-center px-4 border-b border-white/10 bg-black/60 backdrop-blur">
      <h1 className="text-base font-semibold">{title}</h1>
    </header>
  )
}


