import React, { useState } from "react";
import './Footer.css';

import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import LinkedIn from '../../assets/linkedin.png'




const Footer = () => {
    return (
        <div className="FooterContainer">
            <hr />
            
            <div className="Footer">
                <div className="socialmedia">
                    <img src={Github} alt="" />
                    <img src={Instagram} alt="" />
                    <img src={LinkedIn} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer