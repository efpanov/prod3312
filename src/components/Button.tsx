import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost'
  fullWidth?: boolean
}

export default function Button({ variant = 'primary', fullWidth, className = '', ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center rounded-xl text-sm font-medium transition-colors h-11 px-4'
  const variants: Record<string, string> = {
    primary: 'bg-blue-600 text-white hover:bg-blue-500 active:bg-blue-700',
    secondary: 'bg-neutral-800 text-white hover:bg-neutral-700 active:bg-neutral-900',
    ghost: 'bg-transparent text-white hover:bg-white/10 active:bg-white/15',
  }
  const width = fullWidth ? 'w-full' : ''
  return <button className={[base, variants[variant], width, className].join(' ')} {...props} />
}


