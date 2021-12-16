import React from 'react'
import YoutubeEmbed from './YoutubeEmbed'

function OnlineClassCard({oneOnlineClass}) {
    return oneOnlineClass ? (
        <div className="online_class">
            <h3>{oneOnlineClass.name}</h3>
            <h5>{oneOnlineClass.price}</h5>
            <h5>{oneOnlineClass.difficulty}</h5>
            <h4>{oneOnlineClass.description}</h4>
            <YoutubeEmbed embedId={oneOnlineClass.video} /> 
            
        </div>
    ) : null
}

export default OnlineClassCard