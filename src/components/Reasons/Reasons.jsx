import React from 'react'
import './Reasons.css'
import ReasonsLeft from './ReasonsLeft/ReasonsLeft'
import ReasonsRight from './ReasonsRight/ReasonsRight'

const Reasons = () => {
    return (
        <div className="ReasonsParent">
            <div className="leftreason"> <ReasonsLeft/></div>
            <div className="reasonright"> <ReasonsRight/></div>
           
        </div>
    )
}

export default Reasons