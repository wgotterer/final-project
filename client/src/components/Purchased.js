import React from 'react'
import PurchasedCards from './PurchasedCards'

 function Purchased({user, error}) {

    // Newly purchased song isnt there. need to reset state. of User?!!!!!!!!!!
  
    return user ? (
       <div>
            <h1>Purchased Classes</h1>
            {user ? user["online_classes"].map((onePurchase) => <PurchasedCards onePurchase={onePurchase} /> ) : "loading"}
        </div>
    ) : error && error["error"] ? <h2>{error["error"]}</h2> : null   
}

export default Purchased