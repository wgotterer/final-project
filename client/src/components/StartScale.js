import React from 'react'

function StartScale({pianoType, handleMajScale, handleMinScale }) {

    
    return pianoType === -1 ? (
        <div>
            <button className="start_scale_button" onClick={()=>handleMajScale()}>Major Scales</button>
            <button className="start_scale_button" onClick={()=>handleMinScale()}>Minor Scales</button>
        </div>
    ) : null
}

export default StartScale