import React from "react";
import './AD.css'
import {motion} from 'framer-motion'
const AD = () => {
    const transition = {type: 'spring', duration: 50}
    return (
        <div className="Advert">
            < motion.div 
            initial={{left: '240px'}}
            whileInView={{left: '5px'}}
            transition={transition}
            
            ></motion.div>
            <span>CUSTOMISED FITNESS TO FIT YOUR NEEDS</span>
            
        </div>
    )
}

export default AD