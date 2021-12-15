import React from 'react'
import { NOTE_TO_KEY } from '../global/constants';

 function Key({note, pressedKey, setPressedKey}) {



    // function keyIsPressed(note){
    //     for (let key in NOTE_TO_KEY){
    //        key === note ? console.log("blue key") : null
    //     }
    // }

    // keyIsPressed(note)

    return (
        
        <div >
        {note.length > 1 ? <div className="key_flat" > {note.toUpperCase()}</div> : <div className="key">{note.toUpperCase()}</div> }
            
            
        </div>
    )
}

export default Key