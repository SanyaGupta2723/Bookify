import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import PopularBook from '../components/PopularBook'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
    <div className="min-h-screen flex flex-col bg-base-100">
      <NavBar />
     

      
      <main className="flex-grow">
        <Hero />
        <PopularBook />
      </main>
      <div className="w-full h-px bg-white/10"></div>
      <Footer />
      
    </div>
    </>
  )
}

export default Home
