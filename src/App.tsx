import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Services } from './components/Services'
import { Skills } from './components/Skills'
import { TechMarquee } from './components/TechMarquee'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <Services />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}