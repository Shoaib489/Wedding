import React from 'react'
import classes from "./weddingcards.module.css"
import { Data } from '@/utility/data/wedcardsData'
import { IconChevronLeft, IconChevronRight, IconStarFilled } from '@tabler/icons-react';


const WeddingCards = () => {

    return (
        <div className={classes.backgroundgrey}>
            <div className={classes.fixMinwidth}>
                <div className='p-[0px]'>
                    <h1 className='font-bold text-[34px]'>Best Wedding Photographers in Ludhiana, India</h1>
                    <br />
                    <p className='font-light'>Your search for the best wedding photographer ends here. Based in Ludhiana (India), we have covered weddings across countries & having met such wide array of people, having captured weddings of all different cultures like, Hindu weddings, Sikh weddings, Muslim weddings, Christian weddings across Asia & Europe has given us the perfect understanding of our client’s requirements. The contentment we see on our client’s face is what satisfies our soul.</p>
                </div>
                <br />
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
                <br />

                <div className='p-[20px] text-center relative flex items-center '>
                    <div className={classes.left}>
                        <IconChevronLeft className={classes.leftIconsize} stroke={3} />
                    </div>
                    <div className='w-[80%] m-auto'>
                        <h1 className='font-semibold text-[38px]'>Testimonials</h1>
                        <br />
                        <p className='font-light text-[17px]'>Image slider is crucial in any web application to show multiple images with good UX. Whenever we go on any prestigious site Image slider is crucial in any web application to show multiple images with good UX. Whenever we go on any prestigious site like amazon.com or cardekho.com, they show images in the slider, and these websiteNow, what if they show every single image without a slider, users can’t see the image properly, and it looks worst  So, in this tutorial, we will learn various approaches to creating an image slider in ReactJS.</p>
                    </div>

                    <div className={classes.right}>
                        <IconChevronRight className={classes.rightIconsize} stroke={3} />
                    </div>
                </div>

            </div>
            <div className='text-center'>
                <h2 className='font-semibold text-[22px] m-auto'>Oliver & Jiraiya</h2>
                <div className='flex w-[140px] m-auto gap-[5px] 
                ' style={{ color: '#FADB15' }}>
                    <IconStarFilled /><IconStarFilled /><IconStarFilled /><IconStarFilled /><IconStarFilled />
                </div>
                <br />
                <br />
            </div>
        </div>
    )
}

export default WeddingCards