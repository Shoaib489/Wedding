import Navbar from '@/component/navbar'
import { Data } from '@/utility/data/wedcardsData'
import React from 'react'
import classes from "../../component/weddingCrads/weddingcards.module.css"
import Footer from '../../component/footer'


const PreWedding = () => {

  const remove = Data.splice(4);
  console.log(remove)


  return (

    <div>
      <Navbar />
      <div className='p-[20px] pt-10 relative top-12' style={{ maxWidth: "1380px", margin: "auto" }}>
        <div className={classes.gridCards}>
          {Data.map((value, index) => {
            return <div key={index} className={classes.outMainCards}>
              <div className={classes.overshadow}></div>
              <div className={classes.wedCrads}> <img className={classes.imagefit} src={value?.image} alt="" /></div>
              <div className={classes.textOnImg}>
                <p className='text-[30px] text-[white] md:capitalize font-semibold' style={{ letterSpacing: "2px" }}>{value?.text}</p>
                <br />
                <p className='text-[18px] text-[white] md:uppercase font-semibold ' style={{ letterSpacing: "3px" }}>({value?.class})</p>
              </div>
            </div>
          })}
        </div>
      </div>

      <div style={{ display: "grid", maxWidth: "1380px", margin: "50px auto", padding: "20px", border: "1px solid red", Height: "100%", width: "100%" }}>

        <iframe className='flex' style={{ borderRadius: "10px",width:"100%",height:"700px" }} src="https://www.youtube.com/embed/LK7-_dgAVQE?si=nddPcR_9LP4rWLlv" title="YouTube video player" />

      </div>
      <Footer />

    </div>
  )
}

export default PreWedding