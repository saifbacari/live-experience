import React from 'react'
import Navbar from '../components/TopBar/Navbar'
import BestConcerts from '../components/Landing/BestConcerts'

function Concerts() {
  return (
    <div>
      <Navbar />
      <h1>Découvrir les Concerts</h1>
      <BestConcerts />
    </div>
  )
}

export default Concerts 