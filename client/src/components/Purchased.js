import React from 'react'
import PurchasedCards from './PurchasedCards'

 function Purchased({user, error}) {

    // Doesnt work on refresh says cant read admin!!!!!!!!!!
  if(user.admin && user.admin === "1" ){
      return <h2>Excellent job today! Keep up the good work!</h2>
  }else{
    return user ? (
       <div>
            Purchased Classes
            {user ? user["online_classes"].map((onePurchase) => <PurchasedCards onePurchase={onePurchase} /> ) : "loading"}
        </div>
    ) : error && error["error"] ? <h2>{error["error"]}</h2> : null  
     }   
}

export default Purchased