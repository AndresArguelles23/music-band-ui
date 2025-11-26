import './App.css'
import About from './components/About'
import FAQ from './components/FAQ'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navigation from './components/Navigation'
import Shows from './components/Shows'
import Discography from './components/Discography'
import CreativePresence from './components/CreativePresence'

function App() {
  return (
    <div className="app">
      <Navigation />
      <main>
        <Hero />
        <About />
        <CreativePresence />
        <Features />
        <Shows />
        <FAQ />
        <Discography />
      </main>
      <Footer />
    </div>
  )
}

export default App
