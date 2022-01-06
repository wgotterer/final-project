import React, {useState} from 'react'
import EditFormClass from './EditFormClass'
import YoutubeEmbed from './YoutubeEmbed'
import {useNavigate} from "react-router-dom";



function OnlineClassCard({oneOnlineClass, classToDisplay, user, setUser, setClassToDisplay}) {

    const [showBuyForm, setShowBuyForm] = useState(false)
    const [newOnlineClass, setNewOnlineClass] = useState()
    const [showEditForm, setShowEditForm] = useState(false)
    const [formData, setFormData ] = useState({
        credit: '',
        valid: '',
        name: '',
        cvc: ''
    })

    let navigate = useNavigate();


    function handlePurchaseFormChange(e){
        setFormData({...formData, [e.target.name]: [e.target.value]})
    }

    function handleSubmitPurchase(e){
        e.preventDefault()
        if (user["online_classes"].some((oneClass) => oneClass.id === oneOnlineClass.id)){
            
            alert("You have already purchased this!")
        }else{
            fetch("/api/user_online_classes", {
                method: "POST", 
                headers: {
                   "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    // instead of posting the users credit card info, the user id and class id are posted
                    // this a join table in the backend and will allow us to get an online class associatied with a user
                    user_id: user.id,
                    online_class_id: oneOnlineClass.id
                })
            })
            .then((resp)=> resp.json())
            .then((newOnlineClass) => {
                setNewOnlineClass(newOnlineClass["online_class"])
                // to update the state, re-render, and see the purchased class.
                // takes current user state data and iterates into the online classes array belonging to user
                // makes a shallow copy of what is currently in the array
                //  and then adds the value of newOnlineClass' online class array
                setUser((userData) => ({...userData, online_classes: [...userData["online_classes"], newOnlineClass["online_class"]]}))
                alert("Thank you for your purchase")
               
            })
        }
        setFormData({
            credit: '',
            valid: '',
            name: '',
            cvc: ''
        })  
        navigate("/purchased-classes")
    }
   

    function handleShowForm(){
        setShowBuyForm(!showBuyForm) 
    }

    function handleDeleteClass(){
        fetch(`/api/online_classes/${oneOnlineClass.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // instead of making a delete request, a patch is made
                // I didn't want to delete an online class that somebody bought
                // instead just wanted it to be removed from being purchasable
                available: false
            })
        })
        .then((resp)=> resp.json())
        .then((data)=> {
            // maps over a shallow copy of all classes
            // checks to see if one of the classes has the same id as what was just patched
            // if so we are adding that to the new array with its newly updated false availibilty
            // the array is then filtered to only return the classes that have availibity as true
            setClassToDisplay(()=>{
                const allClasses = [...classToDisplay]
                return allClasses.map((aClass)=> {
                    if(aClass.id === data.id){
                        return data
                    }else{
                        return aClass
                    }
                } ).filter(oneClass => oneClass.available === true)
                
            })
        })
        
    }

    function handleEditClass(){
        setShowEditForm(!showEditForm)
    }

    const priceFloat = oneOnlineClass.price

    // Can get a price with a 0 in the tens place to show
    function priceWithZero(x) {
        return Number.parseFloat(x).toFixed(2);
      }

    //   Checks to see if the online classes availbility is set to true before rendering it
    return oneOnlineClass && user && oneOnlineClass.available && oneOnlineClass.available === true ? (
        <div className="online_class">
            <h3>{oneOnlineClass.name}</h3>
           <img width="200px" heigh="200px" src={oneOnlineClass.image} />
            <h5>{priceWithZero(priceFloat)}</h5>
            <h5>{oneOnlineClass.difficulty}</h5>
            <h4>{oneOnlineClass.description}</h4>

           {user.admin && user.admin === "1" ? 
           <>
           <button className="edit_button" onClick={handleEditClass}>{showEditForm ? "Close" : "Edit"}</button>
            
           {showEditForm ? <EditFormClass setClassToDisplay={setClassToDisplay} classToDisplay={classToDisplay} setShowEditForm={setShowEditForm} oneOnlineClass={oneOnlineClass} /> : null}
           <div className="delete_button_container">
           <button className="delete_button" onClick={handleDeleteClass}>Delete Class</button>
           </div>
           </>
           : null} 
           
           {showBuyForm ? 
            
    <div className="popup">
        <div className="popup-inner">
           <form className="buy_form" onSubmit={handleSubmitPurchase}> 
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
                    type='month'
                    name='valid'
                    value={formData.valid}
                    onChange={handlePurchaseFormChange}
                />
                </label>
                <label> CVC: </label>
                <label>
                <input 
                    type='number'
                    name='cvc'
                    value={formData.cvc}
                    onChange={handlePurchaseFormChange}
                />
                </label>
                <label>
                <input
                    type='submit'
                />
                </label>
           </form> 
           <button className="buy_button" onClick={handleShowForm}> {showBuyForm ? "Close" : "BUY"}</button> 
        </div>
    </div>:null}
           <button className="buy_button" onClick={handleShowForm}> {showBuyForm ? "Close" : "BUY"}</button>    
        </div>
    ) : null
}

export default OnlineClassCard