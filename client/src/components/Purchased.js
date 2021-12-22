import React from 'react'
import PurchasedCards from './PurchasedCards'

 function Purchased({user, error}) {

    // Doesnt work on refresh says cant read admin!!!!!!!!!!
  
    return user ? (
       <div>
            Purchased Classes
            {user ? user["online_classes"].map((onePurchase) => <PurchasedCards onePurchase={onePurchase} /> ) : "loading"}
        </div>
    ) : error && error["error"] ? <h2>{error["error"]}</h2> : null   
}

export default Purchased