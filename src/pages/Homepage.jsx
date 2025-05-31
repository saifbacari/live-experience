import React from 'react'
import Navbar from '../components/TopBar/Navbar'
import Hero from '../components/Hero/Hero'
import BestConcerts from '../components/Landing/BestConcerts'

function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(to right, #2d3436, #636e72)',
      color: 'white',
      textAlign: 'center',
      padding: '2rem 0',
      marginTop: '4rem',
      fontFamily: 'Poppins, sans-serif',
      fontSize: '1rem',
      letterSpacing: '1px',
    }}>
      © {new Date().getFullYear()} LiveXperience — Tous droits réservés · Suivez-nous sur <a href="https://instagram.com" style={{color: '#ffd93d', textDecoration: 'none'}} target="_blank" rel="noopener noreferrer">Instagram</a>
    </footer>
  )
}

function Homepage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <BestConcerts />
      <Footer />
    </div>
  )
}

export default Homepage