import React from "react";
import './Figures.css'
import NumberCounter from 'number-counter'

const Figures = () => {
    return (
        <div className="Figures">
            <div >
                <span className="Figures-Numbers"><NumberCounter end={200} start={120} delay={3} preFix='+' /></span>
                <span className="Figures-Words">Coaches</span>
            </div>

            <div >
                <span className="Figures-Numbers"><NumberCounter end={2987} start={2800} delay={3} preFix='+' /> </span>
                <span className="Figures-Words">Members</span>
            </div>
            <div>
                <span className="Figures-Numbers"><NumberCounter end={50} start={20} delay={3} preFix='+' /> </span>
                <span className="Figures-Words">Programs</span>
            </div>
        </div>

       
    )
}

export default Figures