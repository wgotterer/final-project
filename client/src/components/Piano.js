import React from 'react'
import Key from './Key'
import {NOTES} from '../global/constants';

function Piano() {

  return (
        <div className="piano">
           {NOTES.map((note)=><Key note={note} />)}
        </div>
  )
}


export default Piano