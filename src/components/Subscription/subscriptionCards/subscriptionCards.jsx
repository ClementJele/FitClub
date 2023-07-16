import React from 'react'
import RightArrow from '../../../assets/rightArrow.png'
import { plansData } from '../../../data/plansData'
import './subscriptionCards.css'
import Tick from '../../../assets/tick.png' ;



const SubscriptionCards = () => {
    return (
        <div className="subCards">
                {plansData.map((card,i)=> (
                <div className="categories" key={i}>
                   {card.icon}
                    <span className="cardName">{card.name}</span>
                    <span className="cardPrice">{card.price}</span>
                    
                    <div className="features">
                        {card.features.map((feature,i)=>(
                            <div className='feature'>
                                <img src={Tick} alt="" />
                                <span key={i} >{feature}</span>
                            </div>
                        ))}
                    </div>
                    <div className="seeMoreArrow">
                        <span>See more </span>
                        <img src={RightArrow} alt="" className="arrow" />
                    </div>
                    <button className='button'>Join now</button>
                </div> ))}
            </div>
    )
}

export default SubscriptionCards