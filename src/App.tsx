import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Story from './pages/Story'
import Science from './pages/Science'
import Products from './pages/Products'

import Packaging from './pages/Packaging'
import Contact from './pages/Contact'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="pt-16">
        <Routes>
          <Route path="/"           element={<Home />} />
          <Route path="/story"      element={<Story />} />
          <Route path="/science"    element={<Science />} />
          <Route path="/products"   element={<Products />} />
        
          <Route path="/packaging"  element={<Packaging />} />
          <Route path="/contact"    element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
