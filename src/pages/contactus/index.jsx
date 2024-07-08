import Navbar from '@/component/navbar'
import React from 'react'
import classes from "./contactus.module.css"
import Footer from '@/component/footer'
import { IconDeviceTablet, IconMail, IconMapPin } from '@tabler/icons-react';

const ContactUs = () => {
  return (
    <div>
      <Navbar />[]
      <div className={classes.backContact}>
        <div className={classes.divider}>
          <div className='p-[30px] flex-col text-[16px] font-light mt-10'>
            <h1 className='text-[36px] font-semibold capitalize text-center' >contact Us</h1>
            <h3 className='text-[26px] font-semibold capitalize text-center'>We’d love to hear from you</h3>
            <p > Let us know when you want to drop-in for a demo or just to have a cup of coffee!</p>
            <h1 className='text-[26px] font-semibold capitalize mt-5'>Our Office</h1>
            <div className={classes.iconsText}>
              <div className='flex gap-1'>
                <IconMapPin stroke={2} />
                <p> MBD Mall, Pantaloons, Ferozepur - Ludhiana Rd · 0161 504 5642</p>
              </div >
              <div className='flex gap-1'>
                <IconDeviceTablet stroke={2} />
                <p>+91 9876543210</p>
              </div>
              <div className='flex gap-1'>
                <IconMail stroke={2} />
                <p>wddingphoto452@gmail.com</p></div>
            </div>
          </div>
          <div className={`${classes.textplacing}`}>
            <div>
              <p >Name <span className='text-[red]'>*</span></p>
              <input className={`${classes.textarea}`} type="text" />
            </div>
            <div>
              <p>Email <span className='text-[red]'>*</span></p>
              <input className={classes.textarea} type="text" />
            </div>
            <div>
              <p>Contact Number <span className='text-[red]'>*</span></p>
              <input className={classes.textarea} type="text" />
            </div>
            <div>
              <p>Event Date <span className='text-[red]'>*</span></p>
              <input className={classes.textarea} type="text" />
            </div>
            <div >
              <p>Message <span className='text-[red]'>*</span></p>
              <textarea className={classes.textarefixwidth} name="" id="" rows="5"></textarea>
            </div>
            <div className={classes.buttonPosition}><button className={classes.buttonBlack}>Submit</button></div>
          </div>
        </div>


        <div className={classes.locatioMap}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658579.3699189643!2d71.9945340997277!3d26.42891637466987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39747121d702ff6d%3A0xdd2ae4803f767dde!2sTaj%20Mahal!5e0!3m2!1sen!2sin!4v1720421672994!5m2!1sen!2sin" width="100%" height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

        </div>
        <Footer />
      </div>
    </div>
  )
}

export default ContactUs