import React from 'react'
import './subscription.css'
import SubscriptionIntro from './SubscriptionIntro/subscriptionIntro'
import SubscriptionCards from './subscriptionCards/subscriptionCards'


const Subscription = () => {
    return (
        <div className="subscription">
            <SubscriptionIntro/>
            <SubscriptionCards/>
           
        </div>
    )
}

export default Subscription