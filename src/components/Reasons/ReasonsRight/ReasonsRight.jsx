import React from "react";
import './ReasonsRight.css'
import Tick from '../../../assets/tick.png' ;
import brand1 from '../../../assets/nb.png' ;
import brand2 from '../../../assets/nike.png' ;
import brand3 from '../../../assets/adidas.png' ;


const ReasonsRight = () => {
    return (
        <div className="RightReasonsHeading"> 
            <div className="Right-Heading">
                <span className="stoke-text">Our </span>
                <span>Qualities</span></div>  

            <div className="RightReasonsQualitiesStyle">

                <div> 
                    <img src={Tick} alt="" className="RightReasonsQualitiesStylePicture" /> 
                    <span>1 free program</span></div>

                <div>
                    <img src={Tick} alt="" className="RightReasonsQualitiesStylePicture"/>
                    <span>expert coaches</span></div>

                <div>
                    <img src={Tick} alt="" className="RightReasonsQualitiesStylePicture"/>
                    <span>smart training equipment</span></div>

                <div>
                    <img src={Tick} alt="" className="RightReasonsQualitiesStylePicture" />
                    <span>extra diet classes</span></div>

                <div>
                    <img src={Tick} alt="" className="RightReasonsQualitiesStylePicture"/>
                    <span>personal trainers</span></div>
                
                
                
                
                

            </div>

            <div className="Partnerships">Our Valuable Partners</div>

            <div className="partnerBrands">
                <span><img src={brand1} alt="" /></span>
                <span><img src={brand2} alt="" /></span>
                <span><img src={brand3} alt="" /></span>
            </div>

        </div>
    )
}

export default ReasonsRight