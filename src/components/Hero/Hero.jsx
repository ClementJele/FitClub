import React from "react";
import './Hero.css'
import Header from "../Header/Header";
import AD from "../AD/AD";
import HeroHeading from "../HeroHeading/HeroHeading";
import Figures from "../Figures/Figures";
import HeroButtons from "../HeroButtons/HeroButtons";
import HeroRightButtons from "../HeroRightButtons/HeroRightButtons";
import HeartRate from "../HeartRate/HeartRate";
import HeroImage from "../HeroImage/HeroImage";
import Calories from "../Calories/Calories";


const Hero = () => {
    return (
        <div className="hero">
            <div className="left-h">

                <Header/>
                <AD/>
                <HeroHeading/>
                <Figures/>
                <HeroButtons/>
                
            </div>
            <div className="right-h">
                <HeroRightButtons/>
                <HeartRate/>
                <HeroImage/>
                <Calories/>
            </div>
        </div>
    )
}

export default Hero