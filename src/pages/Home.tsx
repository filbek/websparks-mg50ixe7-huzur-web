import React from 'react'
import Hero from '../components/home/Hero'
import Features from '../components/home/Features'
import Products from '../components/home/Products'

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Products />
    </div>
  )
}

export default Home
