import { Code2, Mail, Send } from 'lucide-react'
import { profile } from '../data/portfolio'
import { Reveal } from './Reveal'

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-white/10 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-950/40 via-[#12121a] to-cyan-950/30 p-8 md:p-14">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-cyan-500/15 blur-3xl" />

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-violet-400">
              Контакт
            </p>
            <h2 className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-3xl font-bold leading-tight md:text-5xl">
              Давайте{' '}
              <span className="bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent">
                создадим
              </span>{' '}
              что-то крутое вместе
            </h2>
            <p className="mt-4 max-w-lg text-white/60">
              Открыт для фриланс-проектов и full-time позиций
            </p>

            <ContactLinks />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function ContactLinks() {
  const links = [
    {
      href: profile.telegram,
      label: 'Telegram',
      icon: Send,
    },
    {
      href: profile.github,
      label: 'GitHub',
      icon: Code2,
    },
    {
      href: `mailto:${profile.email}`,
      label: 'Email',
      icon: Mail,
    },
  ] as const

  return (
    <div className="relative mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.label === 'Email' ? undefined : '_blank'}
          rel={link.label === 'Email' ? undefined : 'noopener noreferrer'}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium transition hover:border-violet-400/40 hover:bg-violet-500/10"
        >
          <link.icon className="size-4" />
          {link.label}
        </a>
      ))}
    </div>
  )
}