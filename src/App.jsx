import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Internship from './components/Internship'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Internship />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
