import React, {useState} from 'react'
import EditFormClass from './EditFormClass'
import YoutubeEmbed from './YoutubeEmbed'


function OnlineClassCard({oneOnlineClass, classToDisplay, user, setClassToDisplay}) {

    const [showBuyForm, setShowBuyForm] = useState(false)
    const [showEditForm, setShowEditForm] = useState(false)
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
        }
        setFormData({
            credit: '',
            valid: '',
            name: '',
            cvc: ''
        })  
    }
   

    function handleShowForm(){
        setShowBuyForm(!showBuyForm) 
    }

    

    console.log(oneOnlineClass)

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


    return oneOnlineClass && user && oneOnlineClass.available === true ? (
        <div className="online_class">
            <h3>{oneOnlineClass.name}</h3>
            <h5>{oneOnlineClass.price}</h5>
            <h5>{oneOnlineClass.difficulty}</h5>
            <h4>{oneOnlineClass.description}</h4>
           {user.admin && user.admin === "1" ? 
           <>
           <button onClick={handleEditClass}>{showEditForm ? "Close" : "Edit"}</button>
         
           {showEditForm ? <EditFormClass oneOnlineClass={oneOnlineClass} /> : null}
           <button onClick={handleDeleteClass}>Delete Class</button>
           </>
           : null} 
           
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

           <YoutubeEmbed embedId={oneOnlineClass.video} /> }
           <button onClick={handleShowForm}> {showBuyForm ? "Close" : "BUY"}</button> 
            
        </div>
    ) : null
}

export default OnlineClassCard