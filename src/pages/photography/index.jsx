import React from 'react'
import Navbar from '../../component/navbar'
import Footer from '../../component/footer'

const Photography = () => {
  return (
     <div>
      <Navbar />
      <br />
      <br />
      <br />
      <div className='bg-[url("https://images.squarespace-cdn.com/content/v1/5a550e02692ebee90baeba58/1704926219347-MTXIKXV9FHZ9BZOXF76X/alyssa-kevin-wed-679.jpg")] bg-cover bg-center w-[100%] h-[100vh]'>

      </div>
      <div className='flex gap-3  mb-10  flex-wrap p-3 max-w-[1300px] m-auto'>
        <img src="/images/flowers.jpg" width={300} height="390px" alt="" />
        <img src="/images/wecouple.jpg" width={300} alt="" />
        <img src="/images/woman2.jpg" width={300} alt="" />
      </div>

      <Footer/>



    </div>
  )
}

export default Photography