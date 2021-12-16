import React, {useState, useEffect} from 'react'
import PurchasedCards from './PurchasedCards'

 function Purchased({user}) {


    return (
        <div>
            Purchased Classes
            {user ? user["online_classes"].map((onePurchase) => <PurchasedCards onePurchase={onePurchase} /> ) : "loading"}
        </div>
    ) 
}

export default Purchased