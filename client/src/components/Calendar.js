import React, {useEffect, useState} from 'react'
import CalendarCard from './CalendarCard'
import CalendarAdminCard from './CalendarAdminCard'

 function Calendar({user, error}) {

    const [privateClasses, setPrivateClasses] = useState()


    
        useEffect(() => {
            fetch("/private_classes")
            .then(resp => resp.json())
            .then(allPrivateClasses => setPrivateClasses(allPrivateClasses))
        }, [])
    console.log(privateClasses)




    return  user && user["private_classes"] ? (
        <div>
            <h1>Upcoming Classes</h1>
       {user && user.admin && user.admin !== "1" && user["private_classes"] ? user["private_classes"].map((privateClass) => <CalendarCard privateClass={privateClass} key={privateClass.id}/> ) : 
       privateClasses.map((oneClass)=> <CalendarAdminCard oneClass={oneClass}/> )  }
        </div>
    ) : error && error["error"] ? <h2>{error["error"]}</h2> : null
}

export default Calendar