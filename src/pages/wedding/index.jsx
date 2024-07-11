import Navbar from '@/component/navbar'
import React from 'react'
import classes from "./wedding.module.css"
import { KaranAujla } from '../../utility/playlist/songs'
import Footer from '../../component/footer'

const Wedding = () => {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <div style={{ maxWidth: "1300px", margin: "auto", paddingTop: "40px" }}>
        <iframe style={{borderRadius:"10px", overflow:"hidden"}} width="100%" height="680" src="https://www.youtube.com/embed/vsWxs1tuwDk?si=jhOKoyV5Tfea6leU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div className={classes.playlist} style={{border:"20px solid white ",}}>
      {/* <p>{"Scroll ---->"}</p> */}
        {KaranAujla.map((value, index) => {
          return <div key={index} >
            <iframe style={{borderRadius:"10px", overflow:"hidden"}} width="290px" height="100%" src={value?.url} frameborder="0"></iframe>

          </div>
        })}
      </div>

      {/* <p>{"Scroll ---->"}</p> */}
      <Footer />

    </div>
  )
}

export default Wedding