import React from 'react'
import YoutubeEmbed from './YoutubeEmbed'


 function PurchasedCards({onePurchase}) {

    console.log(onePurchase)
    return (
        <div>
             <h3>{onePurchase.name}</h3>
            <h5>{onePurchase.difficulty}</h5>
            <h4>{onePurchase.description}</h4>
            <YoutubeEmbed embedId={onePurchase.video} /> 
        </div>
    )
}

export default PurchasedCards
