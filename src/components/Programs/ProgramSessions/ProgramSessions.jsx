import React from "react";
import './ProgramSessions.css';
import {programsData} from '../../../data/programsData'
import RightArrow from '../../../assets/rightArrow.png'



const ProgramSessions = () => {
    return (
        

            <div className="Program-categories">
                {programsData.map((program)=> (
                <div className="category">
                    {program.image}
                    <span className="programHeadingStyle">{program.heading}</span>
                    <span className="programDetailStyle">{program.details}</span>
                    <div className="programButtonStyle">
                        <span>Join Now</span>
                        <img src={RightArrow} alt="" className="programImageStyle" />
                    </div>
                </div> ))}
            </div>
            
            
        
    )
}

export default ProgramSessions