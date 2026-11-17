import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data/portfolio'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,box-shadow] duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-[#0a0a0f]/80 shadow-lg shadow-black/20 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a
          href="#"
          className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight"
        >
          {profile.shortName}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/70 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-violet-500/25 transition hover:opacity-90 md:inline-flex"
        >
          Связаться
        </a>

        <button
          type="button"
          className="inline-flex rounded-lg border border-white/10 p-2 text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-white/10 bg-[#0a0a0f] md:hidden"
          >
            <nav className="flex flex-col gap-1 px-5 pb-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-white/80 hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-4 py-3 text-center font-medium"
              >
                Связаться
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}