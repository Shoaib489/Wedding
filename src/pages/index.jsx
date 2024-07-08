import FirstSection from '@/component/firstsection'
import Footer from '@/component/footer'
import Navbar from '@/component/navbar'
import WeddingCards from '@/component/weddingCrads'
import React from 'react'

const index = () => {
  return (
    <div>
      <Navbar/>
      <FirstSection/>
      <WeddingCards/>
      <Footer/>
    </div>
  )
}

export default index