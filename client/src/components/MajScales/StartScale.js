import React from 'react'

function StartScale({pianoType, setPianoType, handleNewScale}) {

    
    return pianoType === -1 ? (
        <div>
            Practice Your major and minor scales!
            <button onClick={()=>handleNewScale()}>Major Scales</button>
            <button>Minor Scales</button>
        </div>
    ) : null
}

export default StartScale