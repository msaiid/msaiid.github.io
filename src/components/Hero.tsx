import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'
import { profile, stats } from '../data/portfolio'

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <HazeBackground />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[1.1fr_0.9fr] md:px-8">
        <div>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-300"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            {profile.available}
          </motion.div>

          <motion.h1
            className="font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
              {profile.role}
            </span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
              {profile.roleSuffix}
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-white/65 md:text-lg"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0a0a0f] transition hover:bg-white/90"
            >
              <Sparkles className="size-4" />
              Обсудить проект
            </a>
            <a
              href="#experience"
              className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white/90 transition hover:border-white/40 hover:bg-white/5"
            >
              Мой опыт
            </a>
          </motion.div>

          <motion.dl
            className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-8 sm:gap-8"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            {stats.map((item) => (
              <div key={item.label}>
                <dt className="font-[family-name:var(--font-display)] text-2xl font-bold text-white md:text-3xl">
                  {item.value}
                </dt>
                <dd className="mt-1 text-xs text-white/50 sm:text-sm">{item.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-sm md:max-w-none"
          initial={reduce ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-violet-600/40 via-fuchsia-500/20 to-cyan-500/30 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/5 p-2 shadow-2xl">
            <img
              src={profile.photo}
              alt={profile.name}
              className="aspect-[4/5] w-full rounded-[1.35rem] object-cover"
              width={480}
              height={600}
            />
          </div>
          <motion.div
            className="absolute -bottom-4 -left-4 rounded-2xl border border-white/10 bg-[#12121a]/90 px-4 py-3 shadow-xl backdrop-blur-md"
            animate={reduce ? undefined : { y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <p className="text-xs text-white/50">{profile.title}</p>
            <p className="font-[family-name:var(--font-display)] text-sm font-semibold">
              {profile.name.split(' ').slice(-1)[0]}
            </p>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#services"
        className="mx-auto mt-14 flex w-fit flex-col items-center gap-1 text-xs uppercase tracking-[0.2em] text-white/40 transition hover:text-white/70"
        animate={reduce ? undefined : { y: [0, 6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        Scroll
        <ArrowDown className="size-4" />
      </motion.a>
    </section>
  )
}

function HazeBackground() {
  return (
  <>
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[100px]" />
      <div className="pointer-events-none absolute top-1/3 -right-32 h-80 w-80 rounded-full bg-cyan-500/10 blur-[80px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />
    </>
  )
}