import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Contact />
      </main>
      <footer className="py-8 text-center text-xs text-zinc-400 dark:text-zinc-600 border-t border-zinc-100 dark:border-zinc-900">
        © {new Date().getFullYear()} Elizabeth Tsitsishvili
      </footer>
    </>
  )
}
