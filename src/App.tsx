import './App.css'
import About from './components/About'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navigation from './components/Navigation'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <div className="app">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

export default App
