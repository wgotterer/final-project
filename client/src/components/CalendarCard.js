import React from 'react'

function CalendarCard({privateClass}) {
    return (
        <div>
            <h2>{privateClass.date}</h2>
            <h2>{privateClass.goal}</h2>
        </div>
    )
}

export default CalendarCard