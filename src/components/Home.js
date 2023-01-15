import React from 'react'
import Abouts from './Abouts'
import Featured from './Featured'
import Gallery from './Gallery'
import Hero from './Hero'

const Home = () => {
  return (
    <div>
      <Hero />
      <Featured />
      <Abouts />
      <Gallery />
    </div>
  )
}

export default Home