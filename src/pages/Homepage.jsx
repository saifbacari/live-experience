import React from 'react'
import Navbar from '../components/TopBar/Navbar'
import Hero from '../components/Hero/Hero'
import BestConcerts from '../components/Landing/BestConcerts'


function Homepage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <BestConcerts />
    </div>
  )
}

export default Homepage