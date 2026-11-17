import { Reveal } from './Reveal'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  id?: string
}

export function SectionHeading({ eyebrow, title, id }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 text-center md:mb-16">
      <p className="text-xs font-medium uppercase tracking-[0.25em] text-violet-400">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight md:text-4xl"
      >
        {title}
      </h2>
    </Reveal>
  )
}