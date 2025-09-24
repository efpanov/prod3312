export default function TopBar() {
  return (
    <div className="pt-[max(env(safe-area-inset-top),12px)] px-4 pb-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-2xl bg-white/10 flex items-center justify-center text-sm">MM</div>
        <div>
          <div className="text-xs text-white/70">Парикмахер</div>
          <div className="text-sm font-medium">Мария Мастер</div>
        </div>
      </div>
      <button className="h-10 w-10 rounded-2xl bg-white/10">\uD83D\uDD14</button>
    </div>
  )
}


