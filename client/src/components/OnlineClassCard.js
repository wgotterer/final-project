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


    // Could I do a post request in the handle submit that posts a new user_online_class instance?
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
                    placeholder="Credit Card Number"
                />
                </label>
                <label> Full Name: </label>
                <label>
                <input 
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handlePurchaseFormChange}
                    placeholder="Full Name"
                />
                </label>
                <label> Valid Through: </label>
                <label>
                <input 
                    type='date'
                    name='valid'
                    value={formData.valid}
                    onChange={handlePurchaseFormChange}
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