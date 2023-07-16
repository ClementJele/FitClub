import React from "react";
import './HeartRate.css'
import Heart from '../../assets/heart.png'
import {motion} from 'framer-motion'

const HeartRate = () => {
    const transition = {type: 'spring', duration: 50}
    return (
        <motion.div className="Heart-Rate"
            initial={{right: '-1px'}}
            whileInView={{right: '25px'}}
            transition={transition}
        
        >
            <img src={Heart} alt="" />
            <span>Heart Rate</span>
            <span> 116 BPM</span>
        </motion.div>

       
    )
}

export default HeartRate