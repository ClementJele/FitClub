import React from "react";
import './HeartRate.css'
import Heart from '../../assets/heart.png'

const HeartRate = () => {
    return (
        <div className="Heart-Rate">
            <img src={Heart} alt="" />
            <span>Heart Rate</span>
            <span> 116 BPM</span>
        </div>

       
    )
}

export default HeartRate