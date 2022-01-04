import React, {useState} from 'react'

function CalendarCard({privateClass}) {

    // const [dateString, setDateString] = useState([])

    let d = new Date(privateClass.date).toLocaleString('en-US');
    
    
    console.log(d)
    

    return  (
        <div>
            <h2>{d}</h2>
            <h2>Goals: {privateClass.goal}</h2>
        </div>
    ) 
}

export default CalendarCard