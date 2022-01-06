import React, {useEffect, useState} from 'react'
import CalendarCard from './CalendarCard'
import CalendarAdminCard from './CalendarAdminCard'

 function Calendar({user, error}) {

    const [privateClasses, setPrivateClasses] = useState()


    // fetches and sets to state all private classes
        useEffect(() => {
            fetch("/api/private_classes")
            .then(resp => resp.json())
            .then(allPrivateClasses => setPrivateClasses(allPrivateClasses))
        }, [])
        
   
        // checks to see if user and priv class state do not exist
        // if so renders html message
        if(!user || !privateClasses){
            return <h2>Page Not Available</h2> 
        }
    return  (user && user["private_classes"]) ? (
        <>
        <h1>Upcoming Classes</h1>
        <div className="calendar_grid_container">

            {/* If the user is not an admin then we want to render only the priv classes associated with specific user (non admins have their admin column set to "0")  */}
       {(user.admin !== "1") ? user["private_classes"].map((privateClass) => <CalendarCard privateClass={privateClass} key={privateClass.id}/> ) : 
        // If user is admin then render all upcoming classes 
       privateClasses.map((oneClass)=> <CalendarAdminCard oneClass={oneClass}/> )  }
        </div>
        </>
    ) : error && error["error"] ? <h2>{error["error"]}</h2> : null
}

export default Calendar