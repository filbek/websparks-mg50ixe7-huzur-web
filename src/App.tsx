import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Manufacturing from './pages/Manufacturing'
import Products from './pages/Products'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/leather-jacket-manucaturing-leather-bag-manufacturing-service" element={<Manufacturing />} />
            <Route path="/recycled-polipropylene-mesh-bag" element={<Products />} />
            <Route path="/blog/leather-bag-manufacturing-blog" element={<Blog />} />
            <Route path="/blog/2025/04/10/:slug" element={<Blog />} />
            <Route path="/blog/2024/12/12/:slug" element={<Blog />} />
            <Route path="/blog/2024/02/22/:slug" element={<Blog />} />
            <Route path="/blog/2023/09/03/:slug" element={<Blog />} />
            <Route path="/blog/2023/06/19/:slug" element={<Blog />} />
            <Route path="/blog/2023/05/23/:slug" element={<Blog />} />
            <Route path="/blog/2023/03/30/:slug" element={<Blog />} />
            <Route path="/blog/2022/01/04/:slug" element={<Blog />} />
            <Route path="/blog/2020/01/13/:slug" element={<Blog />} />
            <Route path="/blog/category/:category" element={<Blog />} />
            <Route path="/blog/tag/:tag" element={<Blog />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/lookbook/leather%20bag%20leather%20jacket%20manufacturing.pdf" element={<Products />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
