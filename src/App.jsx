import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Parcours from './components/Parcours'
import Stack from './components/Stack'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <main>
        <Hero />
        <div className="divider-line" />
        <About />
        <div className="divider-line" />
        <Parcours />
        <div className="divider-line" />
        <Stack />
        <div className="divider-line" />
        <Projects />
        <div className="divider-line" />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
