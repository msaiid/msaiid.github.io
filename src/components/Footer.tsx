import { profile } from '../data/portfolio'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-center text-sm text-white/45 md:flex-row md:px-8 md:text-left">
        <p className="font-[family-name:var(--font-display)] font-semibold text-white/80">
          {profile.shortName}
        </p>
        <p>
          © {year} {profile.name} — {profile.title}
        </p>
        <p>{profile.location}</p>
      </div>
    </footer>
  )
}