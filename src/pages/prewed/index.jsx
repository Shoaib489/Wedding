import Navbar from '@/component/navbar'
import { Data } from '@/utility/data/wedcardsData'
import React from 'react'
import classes from "../../component/weddingCrads/weddingcards.module.css"


const PreWedding = () => {

  // const remove = Data.splice(5);


  return (

    <div>
      <Navbar />
      <div className='p-[50px] relative top-12'>
        <div className={classes.gridCards}>
          {Data.map((value, index) => {
            return <div className={classes.outMainCards}>
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
    </div>
  )
}

export default PreWedding