import BottomNav from './BottomNav'
import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full flex justify-center bg-[radial-gradient(1200px_800px_at_50%_-200px,#0b1324_20%,#070b13_60%,#05070c_100%)] text-white">
      <div className="w-full max-w-[430px] min-h-screen relative">
        {children}
        <div className="h-20" />
        <BottomNav />
      </div>
    </div>
  )
}


