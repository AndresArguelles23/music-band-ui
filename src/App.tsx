import './App.css'
import About from './components/About'
import FAQ from './components/FAQ'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navigation from './components/Navigation'
import Shows from './components/Shows'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <div className="app">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Features />
        <Shows />
        <FAQ />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

export default App
