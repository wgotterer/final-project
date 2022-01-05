import React, {useState} from 'react'

 function EditFormClass({oneOnlineClass, setShowEditForm, classToDisplay, setClassToDisplay}) {

     const [dataEditForm, setDataEditForm] = useState(oneOnlineClass)

     function handleChangeEdit(e){
        setDataEditForm({...dataEditForm, [e.target.name] : e.target.value})
     }

     function handleSubmitEdit(e){
        e.preventDefault()
         fetch(`/online_classes/${dataEditForm.id}`, {
             method: "PATCH",
             headers: {
                "Content-Type": "application/json"
             },
             body: JSON.stringify({
                name: dataEditForm.name,
                price: dataEditForm.price,
                difficulty: dataEditForm.difficulty,
                description: dataEditForm.description
             })
         })
         .then((resp)=> resp.json())
         .then((updatedClass)=>{
             
            setClassToDisplay(()=>{
                const allClasses = [...classToDisplay]
                return allClasses.map((oneClass)=> {
                    if(oneClass.id === updatedClass.id){
                        return updatedClass
                    }else{
                        return oneClass
                    }
                })
                
            })
         })
         setShowEditForm(false)
     }
    

     console.log(dataEditForm)

    return oneOnlineClass && dataEditForm ? (
        <div className="popup">
        <div className="popup-inner">
        <div>
              <form className="form_edit" onSubmit={handleSubmitEdit}> 
                <label> Name: </label>
                <label>
                <input 
                    type='text'
                    name='name'
                    value={dataEditForm.name}
                    onChange={handleChangeEdit}
                    placeholder="hello"
                    
                />
                </label>
                <label> Price: </label>
                <label>
                <input 
                    type='price'
                    name='price'
                    value={dataEditForm.price}
                    onChange={handleChangeEdit}
                    
                />
                </label>
                <label> Difficulty: </label>
                <label>
                <input 
                    type='text'
                    name='difficulty'
                    value={dataEditForm.difficulty}
                    onChange={handleChangeEdit}
                />
                </label>
                <label> Description: </label>
                <label>
                <input 
                    type='text'
                    name='description'
                    value={dataEditForm.description}
                    onChange={handleChangeEdit}
                />
                </label>
                <label>
                <input
                    type='submit'
                />
                </label>
           </form>
        </div>
        </div>
        </div>
    ) : null
}

export default EditFormClass