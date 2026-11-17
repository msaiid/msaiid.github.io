import type { ReactNode } from 'react'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { services } from '../data/portfolio'

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-20 md:py-28">
      <SectionWrap>
        <SectionHeading eyebrow="Что я делаю" title="Услуги" />

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.08}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:shadow-xl hover:shadow-violet-500/10 md:p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 to-cyan-500/0 opacity-0 transition group-hover:opacity-100 group-hover:from-violet-600/10 group-hover:to-cyan-500/5" />
                <div className="relative">
                  <span className="text-3xl" aria-hidden>
                    {service.icon}
                  </span>
                  <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-semibold">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {service.description}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </SectionWrap>
    </section>
  )
}

function SectionWrap({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-6xl px-5 md:px-8">{children}</div>
  )
}