import React from 'react'

 function Key({note}) {

    

    // const noteIsFlat = (note) => {
    //     return note.length > 1;
    //   }

      console.log(note.length)

    return (
        
        <div >
        {note.length > 1 ? <div className="key_flat"> {note.toUpperCase()}</div> : <div className="key">{note.toUpperCase()}</div> }
            
            
        </div>
    )
}

export default Key