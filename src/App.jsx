import './App.css'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import Hero from './components/hero/hero'
import Products from './components/products/products'
import Services from './components/services/services'

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Products />
      <Services />
      <Footer/>
    </main>
  )
}

export default App
