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
            fetch("/user_online_classes", {
                method: "POST", 
                headers: {
                   "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    user_id: user.id,
                    online_class_id: oneOnlineClass.id
                })
            })
            .then((resp)=> resp.json())
            .then((newOnlineClass) => {
                setNewOnlineClass(newOnlineClass["online_class"])
                setUser((userData) => ({...userData, online_classes: [...userData["online_classes"], newOnlineClass["online_class"]]}))

               
            })
        }
        setFormData({
            credit: '',
            valid: '',
            name: '',
            cvc: ''
        })  
        alert("Thank you for your purchase")
        // props.setUser((userData)=> ({...userData, private_classes: [...userData["private_classes"], newPrivateClass]}))

        navigate("/purchased-classes")

        //to reset state so the users purchased songs appear do i need to setUser state to user plus the newly purhcased online class?
    }
   

    function handleShowForm(){
        setShowBuyForm(!showBuyForm) 
    }

    
    console.log(user)
    console.log(classToDisplay)

    function handleDeleteClass(){
        fetch(`/online_classes/${oneOnlineClass.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                available: false
            })
        })
        .then((resp)=> resp.json())
        .then((data)=> {
            console.log(data)
            
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

    // Doesnt display classes in browser on refresh but doesnt error out. I think it's something to do with not being able to read if an online class is availble.

    return oneOnlineClass && user && oneOnlineClass.available && oneOnlineClass.available === true ? (
        <div className="online_class">
            <h3>{oneOnlineClass.name}</h3>
           <img width="200px" heigh="200px" src={oneOnlineClass.image} />
            <h5>{oneOnlineClass.price}</h5>
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
                    type='date'
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
           </form> :

        //    <YoutubeEmbed embedId={oneOnlineClass.video} /> }
        null }

           <button className="buy_button" onClick={handleShowForm}> {showBuyForm ? "Close" : "BUY"}</button> 
            
        </div>
    ) : null
}

export default OnlineClassCard