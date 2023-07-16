import React from "react";
import './Calories.css'
import Calories_image from '../../assets/calories.png'
import {motion} from 'framer-motion'

const Calories = () => {
    const transition = {type: 'spring', duration: 50}
    return (
        <motion.div className="calories"
            initial={{right: '14rem'}}
            whileInView={{right: '28rem'}}
            transition={transition}
         >
            <img src={Calories_image} alt="" />
            <div className="CaloriesInfo">
                <span > Calories burned</span>
                <span>89 kcal</span>
            </div>
            
        </motion.div>
                

       
    )
}

export default Calories