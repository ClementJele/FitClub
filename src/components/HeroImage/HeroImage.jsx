import React from "react";
import './HeroImage.css'
import Image from '../../assets/hero_image.png'
import ImageBackground from '../../assets/hero_image_back.png'
const HeroImage = () => {
    return (
        <div >
            <img src={Image} alt="" className="Hero-image"/>
            <img src={ImageBackground} alt="" className="Hero-image_back"/>
        </div>
        

       
    )
}

export default HeroImage