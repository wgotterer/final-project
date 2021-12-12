import React from 'react'

 function Key({note}) {
    return (
        <div className="key">
            <div className="key-text">
                {note.toUpperCase()}
            </div>
            
        </div>
    )
}

export default Key