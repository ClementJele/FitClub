import React from "react";
import './Calories.css'
import Calories_image from '../../assets/calories.png'

const Calories = () => {
    return (
        <div className="calories" >
            <img src={Calories_image} alt="" />
            <div className="CaloriesInfo">
                <span > Calories burned</span>
                <span>89 kcal</span>
            </div>
            
        </div>
                

       
    )
}

export default Calories