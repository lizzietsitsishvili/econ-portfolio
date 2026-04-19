'use client'

import ThemeToggle from './ThemeToggle'
import { useState } from 'react'

const links = [
  { href: '#about',      label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects',   label: 'Projects' },
  { href: '#skills',     label: 'Skills' },
  { href: '#contact',    label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-100 dark:border-zinc-800">
      <div className="max-w-5xl mx-auto px-8 h-16 flex items-center justify-between">
        <span className="text-sm font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase">ET</span>

        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {l.label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} className="p-2 text-zinc-500">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-8 py-5 flex flex-col gap-5">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
