import React from 'react'
import CalendarCard from './CalendarCard'

 function Calendar({user, error}) {

//    user && user["private_classes"] ?  console.log(user["private_classes"]) : "loading"

//    console.log(user["private_classes"])

    return  user && user["private_classes"] ? (
        <div>
            <h1>Upcoming Classes</h1>
       {user["private_classes"].map((privateClass) => <CalendarCard privateClass={privateClass} key={privateClass.id}/> ) }
        </div>
    ) : error && error["error"] ? <h2>{error["error"]}</h2> : null

}

export default Calendar