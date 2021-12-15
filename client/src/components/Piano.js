import React, {useState} from 'react'
import Key from './Key'
import {NOTES, VALID_KEYS, KEY_TO_NOTE} from '../global/constants';

function Piano() {

const [pressedKey, setPressedKey] = useState([])





console.log(KEY_TO_NOTE.c)

  return (
        <div className="piano">
           {NOTES.map((note)=><Key note={note} pressedKey={pressedKey} setPressedKey={setPressedKey} />)}
        </div>
  )
}


export default Piano