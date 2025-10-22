import React from 'react'
import Hero from '../components/home/Hero'
import WorkWithUs from '../components/home/WorkWithUs'
import About from '../components/home/About'

const Home = () => {
  return (
    <div className='bg-black'>
      <Hero />
      <About />
      <WorkWithUs />
    </div>
  )
}

export default Home
