import React from "react";
import './Header.css'
import Logo from '../../assets/logo.png'
import {Link} from 'react-scroll'
const Header = () => {
    return (
        <div className="header">
            <img src={Logo} alt="" className="logo" />
            <ul className="header-menu">
                <li> <Link
                    to='hero'
                    span={true}
                    smooth={true}

                >Home</Link></li>

                <li><Link
                    to='programs'
                    span={true}
                    smooth={true}

                >Programs</Link></li>


                <li><Link
                    to='ReasonsParent'
                    span={true}
                    smooth={true}
                >Why us</Link></li>

                <li><Link 
                    to='subIntro'
                    span={true}
                    smooth={true}
                >Plans</Link></li>

                <li><Link
                    to='Testimony'
                    span={true}
                    smooth={true}
                >Testimonies</Link></li>

                <li><Link
                    to='contacts'
                    span={true}
                    smooth={true}
                
                >Contacts</Link></li>
            </ul>
        </div>
    )
}

export default Header