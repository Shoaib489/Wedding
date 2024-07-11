import React, { useState } from 'react'
import Navbar from '../../component/navbar'
import Footer from '../../component/footer'


const Charges = () => {

  


  return (

    <>
      <div>
      <Navbar />
      <br />
      <br />
      <br />
      <div className='bg-[url("https://images.squarespace-cdn.com/content/v1/5a550e02692ebee90baeba58/1704926185485-YQK0F0HHZF4DL9I00WKO/alyssa-kevin-wed-283.jpg")] bg-cover bg-center w-[100%] h-[100vh]'>

      </div>
      <div className='flex gap-3  mb-10  flex-wrap p-3 max-w-[1300px] m-auto'>
        <img src="/images/flowers.jpg" width={300} height="390px" alt="" />
        <img src="/images/wecouple.jpg" width={300} alt="" />
        <img src="/images/woman2.jpg" width={300} alt="" />
      </div>

      <Footer />



    </div>


    </>


  )
}

export default Charges



