import React from 'react'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Featured from '../components/Featured.jsx'
import Skills from '../components/Skills.jsx'
import Certificate from '../components/Certificate.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Featured/>
      <Skills/>
      <Certificate/>
      <Contact/>
      <Footer/>
    </div>
  )
}