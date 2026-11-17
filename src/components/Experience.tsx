import { MapPin } from 'lucide-react'
import { experience } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-white/10 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading eyebrow="Карьера" title="Опыт работы" />

        <div className="relative space-y-0">
          <div className="absolute top-0 bottom-0 left-[1.65rem] hidden w-px bg-gradient-to-b from-violet-500/50 via-white/10 to-transparent md:block" />

          {experience.map((item, i) => (
            <Reveal key={item.index} delay={i * 0.06}>
              <article className="relative grid gap-4 pb-10 md:grid-cols-[7rem_1fr_auto] md:gap-8 md:pb-12">
                <time className="text-sm font-medium text-white/45 md:text-right">
                  {item.period}
                </time>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/20 md:p-6">
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">
                    {item.company}
                  </h3>
                  <p className="mt-1 text-sm text-violet-300/90">{item.role}</p>
                  {'note' in item && item.note && (
                    <p className="mt-2 text-sm text-white/50">{item.note}</p>
                  )}
                  {item.location && (
                    <p className="mt-3 flex items-center gap-1.5 text-xs text-white/45">
                      <MapPin className="size-3.5" />
                      {item.location}
                    </p>
                  )}
                </div>

                <span className="hidden font-[family-name:var(--font-display)] text-4xl font-bold text-white/10 md:block">
                  {item.index}
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}