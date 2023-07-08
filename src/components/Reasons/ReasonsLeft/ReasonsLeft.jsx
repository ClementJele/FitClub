import React from "react";
import image1 from '../../../assets/image1.png' ;
import image2 from '../../../assets/blackimage2.jpeg' ;
import image3 from '../../../assets/blackimage3.jpeg' ;
import image4 from '../../../assets/image4.png' ;

import './ReasonsLeft.css'





const ReasonsLeft = () => {
    return (
        <div className="reasonLeftParentDiv">
            <div className="reasonleftchild">
                <img src={image1} alt="" className="Image1"/>
            </div>

            <div className="reasonrightchild">
                <div className="childright1">
                    
                        <img src={image2} alt="" className="image2"/>
                  
                </div>

                

                <div className="child3">
                    <span className="child3leftchild"><img src={image3} alt="" /></span>
                    <span className="child3rightchild"> <img src={image4} alt="" /></span>   
                    
                </div>
            </div>

        </div>
    )
}

export default ReasonsLeft