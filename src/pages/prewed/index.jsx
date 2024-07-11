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
      <div className='p-[50px] relative top-12' style={{maxWidth:"1380px", margin:"auto"}}>
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

      <div style={{maxWidth:"1380px", margin:"auto", padding:"50px"}}>
        <iframe style={{borderRadius:"10px", overflow:"hidden"}} width="100%" height={700} src="https://www.youtube.com/embed/LK7-_dgAVQE?si=nddPcR_9LP4rWLlv" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />

      </div>
      <Footer />

    </div>
  )
}

export default PreWedding