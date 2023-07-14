import React from 'react'
import RightArrow from '../../../assets/rightArrow.png'
import { plansData } from '../../../data/plansData'
import './subscriptionCards.css'



const SubscriptionCards = () => {
    return (
        <div className="subCards">
                {plansData.map((card,i)=> (
                <div className="categories">
                    <span className='cardicon'>{card.icon}</span>
                    <span className="cardName">{card.name}</span>
                    <span className="cardPrice">{card.price}</span>
                    <span className="cardFeatures">{card.features.map(i)}</span>
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