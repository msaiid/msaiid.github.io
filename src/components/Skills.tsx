import { skillGroups } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading eyebrow="Стек" title="Технологии" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.07}>
              <SkillCard title={group.title} items={group.items} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillCard({
  title,
  items,
  index,
}: {
  title: string
  items: readonly string[]
  index: number
}) {
  const accents = [
    'from-violet-600/20 to-transparent',
    'from-cyan-600/15 to-transparent',
    'from-fuchsia-600/15 to-transparent',
    'from-amber-500/10 to-transparent',
    'from-emerald-600/15 to-transparent',
    'from-rose-600/12 to-transparent',
  ]

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${accents[index % accents.length]} p-6 md:p-7`}
    >
      <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">
        {title}
      </h3>
      <ul className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-lg border border-white/10 bg-[#0a0a0f]/50 px-3 py-1.5 text-sm text-white/75"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}