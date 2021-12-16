import React, {useState} from 'react'
import YoutubeEmbed from './YoutubeEmbed'

function OnlineClassCard({oneOnlineClass}) {

    const [showBuyForm, setShowBuyForm] = useState(false)
    const [formData, setFormData ] = useState({
        credit: '',
        valid: '',
        name: '',
        cvc: ''
    })

    function handlePurchaseFormChange(e){
        setFormData({...formData, [e.target.name]: [e.target.value]})
    }

    function handleSubmitPurchase(e){
        e.preventDefault()
    }


    function handleShowForm(){
        setShowBuyForm(!showBuyForm)
    }
    return oneOnlineClass ? (
        <div className="online_class">
            <h3>{oneOnlineClass.name}</h3>
            <h5>{oneOnlineClass.price}</h5>
            <h5>{oneOnlineClass.difficulty}</h5>
            <h4>{oneOnlineClass.description}</h4>
           {showBuyForm ? 

           <form onSubmit={handleSubmitPurchase}> 
                <label> Credit Card Number: </label>
                <label>
                <input 
                    type='text'
                    name='credit'
                    value={formData.credit}
                    onChange={handlePurchaseFormChange}
                    placeholder="credit"
                />
                </label>
                <label>
                <input
                    type='submit'
                />
                </label>
           </form> :

           <YoutubeEmbed embedId={oneOnlineClass.video} /> }
           <button onClick={handleShowForm}> {showBuyForm ? "Close" : "BUY"}</button> 
            
        </div>
    ) : null
}

export default OnlineClassCard