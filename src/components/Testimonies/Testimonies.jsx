import React, { useState } from "react";
import './Testimonies.css';
import {testimonialsData} from "../../data/testimonialsData"
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import {motion} from 'framer-motion'




const Testimonies = () => {
    const [selected, setSelected] = useState(0)
    const TestimonialLength = testimonialsData.length;
    const transition = {type: 'spring', duration: 50}

    return (
    
            <div className="Testimony">
                <div className="Testimony-left">
                    <span className="Testimonies">TESTIMONIALS</span>
                    <span className="Testimonies-child2">WHAT THEY HAVE TO SAY</span>
                    <span className="Testimonies-child3">ABOUT US</span>

                   <span className="Testimony-review">
                    {testimonialsData[selected].review}
                   </span>

                   <span className="Testimony-name">
                    <span>{testimonialsData[selected].name}</span>
                    <span className="Testimony-status"> - {testimonialsData[selected].status}</span>
                   </span>
                </div>
                <div className="Testimony-right">
                    <motion.div 
                    initial={{right: '20rem'}}
                    whileInView={{right: '7rem'}}
                    transition={{...transition,  duration: 5}}></motion.div>

                    <motion.div 
                    initial={{opacity: 0, x:100}}
                    whileInView={{opacity: 1,  x: 0}}
                    transition={{...transition, duration: 7}}></motion.div>
                    
                    <motion.img src={testimonialsData[selected].image } alt="" 
                    key={selected}
                    initial={{opacity: 0.6, x: 100}}
                    animate={{opacity: 1, x : 0}}
                    exit={{opacity: 0, x : -100}}
                    transition={{...transition,  duration: 5}}/>
                    
                    <div className="arrows">
                        <img 
                        onClick={()=> (
                            selected === 0? setSelected(TestimonialLength-1): 
                            setSelected((prev) => prev -1)
                        )}
                        src={leftArrow} alt="" />


                        <img 
                        onClick={()=> (
                            selected === TestimonialLength-1? setSelected(0): 
                            setSelected((nxt) => nxt + 1)
                        )}
                        
                        src={rightArrow} alt="" />
                    </div>
                </div>
            </div>
            
            
        
    )
}


export default Testimonies