import Navbar from '@/component/navbar'
import React from 'react'
import classes from "./aboutus.module.css"
import Footer from '@/component/footer'

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className={classes.cameraback}>

      </div>
      <div className={classes.greyback}>
      <div className='max-w-[1310px] m-auto p-[20px] mt-16'>
        <h1 className='text-[34px] font-bold  '>This is nyc team.</h1>
        <p className='text-[17px] font-light mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <br />
        <h1 className='text-[34px] font-bold'>hello</h1>
        <p className='text-[17px] font-light mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

        <h1 className='text-[30px] font-semibold underline text-center mt-6'>Our Team</h1>
        <div className={classes.newCards}>
          <div className='w-[100px] h-[100px] '>
            {/* <img className=' rounded-full w-[100px] h-[100px] object-cover' src="https://s3-wedding.s3.ap-south-1.amazonaws.com/16871452065421686827776194caption%20%281%29.jpg" alt="" /> */}
          </div>
          <p className='text-[20px] font-bold'>Olivia Rhye</p>
          <p className='text-[18px] font-semibold'>Founder & CEO</p>
          <p className='text-[16px] font-light'>Lorem dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default AboutUs