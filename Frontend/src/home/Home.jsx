import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import PopularBook from '../components/PopularBook'
import Footer from '../components/Footer'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";





function Home() {
  const location = useLocation();

useEffect(() => {
  if (location.state?.openLogin) {
    document.getElementById("my_modal_5")?.showModal();
  }
}, [location]);

  return (
    <>
    <div className="min-h-screen flex flex-col bg-base-100">
     
     

      
      <main className="flex-grow">
        <Hero />
        <PopularBook />
      </main>
      <div className="w-full h-px bg-white/10"></div>
      
      
     
      
    </div>
    </>
  )
}

export default Home
