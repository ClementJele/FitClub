import React from "react";
import './Programs.css'
import Programsintro from "./ProgramsIntro/ProgramsIntro/ProgramsInto";
import ProgramSessions from "./ProgramSessions/ProgramSessions";


const Programs = () => {
    return (
        <div className="programs">
            <Programsintro/>
            <ProgramSessions/>
            
        </div>

       
    )
}

export default Programs