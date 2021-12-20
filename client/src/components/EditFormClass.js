import React, {useState} from 'react'

 function EditFormClass({oneOnlineClass}) {

     const [dataEditForm, setDataEditForm] = useState(oneOnlineClass)

     function handleChangeEdit(e){
        setDataEditForm({...dataEditForm, [e.target.name] : [e.target.value]})
     }

     function handleSubmitEdit(){
         console.log("submitted!!!")
     }

     console.log(dataEditForm)

    return oneOnlineClass && dataEditForm ? (
        <div>
              <form onSubmit={handleSubmitEdit}> 
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
    ) : null
}

export default EditFormClass