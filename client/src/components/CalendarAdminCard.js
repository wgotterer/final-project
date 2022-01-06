import React from 'react'


 function CalendarAdminCard({oneClass}) {

    // makes the date formatted in a prettier way
    let d = new Date(oneClass.date).toLocaleString('en-US');

    return (
        <div className="calendar_item">
            <h2>{d}</h2>
            <h1>{oneClass.user["name"]}</h1>
            <h1>{oneClass.user["email"]}</h1>
            <h2>{oneClass.goal}</h2>
        </div>
    )
}

export default CalendarAdminCard
