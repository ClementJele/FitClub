import React from "react";
import './HeroImage.css'
import Image from '../../assets/hero_image.png'
import {motion} from 'framer-motion'
import ImageBackground from '../../assets/hero_image_back.png'
const HeroImage = () => {
    const transition = {type: 'spring', duration: 50}

    return (
        <div >
            <img src={Image} alt="" className="Hero-image"/>
            <motion.img src={ImageBackground} alt="" className="Hero-image_back" 
            initial={{right: '10rem'}}
            whileInView={{right: '18rem'}}
            transition={transition}/>
        </div>
        

       
    )
}

export default HeroImage