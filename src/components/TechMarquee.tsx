import { marqueeTech } from '../data/portfolio'

export function TechMarquee() {
  const items = [...marqueeTech, ...marqueeTech]

  return (
    <div className="border-y border-white/10 bg-white/[0.02] py-5">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0a0a0f] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0a0a0f] to-transparent" />
        <div className="flex w-max animate-marquee gap-10">
          {items.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="whitespace-nowrap text-sm font-medium tracking-wide text-white/45"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}