import React, {useEffect, useState} from 'react'
import OnlineClassCard from './OnlineClassCard'
import Popup from './Popup'


function OnlineClass({user, error, setUser}) {

    const [allOnlineClasses, setAllOnlineClasses] = useState()
    const [showPopUp, setShowPopUp] = useState(false)
    const [search, setSearch] = useState();
    const [classToDisplay, setClassToDisplay] = useState([{}]);
    const [category, setCategory] = useState()
   
    



    useEffect(() => {
            fetch("/api/online_classes")
            .then(resp => resp.json())
            .then(onlineClasses => {
                setAllOnlineClasses(onlineClasses)
                setClassToDisplay(onlineClasses)
             
            })
       
       
    }, [])
    
    // console.log(error)

    // console.log(allOnlineClasses)

    function handleShowPopUp(){
        setShowPopUp(!showPopUp)
    }

    function handleSearch(e){
        setSearch(e.target.value)
        handleFilterSearch(e.target.value)
    }

    function handleFilterSearch(value) {
        setClassToDisplay(allOnlineClasses.filter(filterclass => {
            return filterclass.name.toLowerCase().includes(value.toLowerCase());
        }));
        
    }


    function handleCategory(e){
        setCategory(e.target.value)
        filterByCategory(e.target.value)
    }
   
    function filterByCategory(value){
        if (value === "all"){
           return  setClassToDisplay(allOnlineClasses)
        }else{
            setClassToDisplay(allOnlineClasses.filter((oneClass)=> {
                return oneClass.difficulty === value
            }))
        }
    }




    return allOnlineClasses && user ? (
        <div>
            <h3>Purchase premium follow along classes below</h3>
            <h3>Or</h3>
            <h3>Sign up for a private class here</h3>
            <button className="sign_up_button" onClick={handleShowPopUp}>Sign Up</button>
            <Popup user={user} setUser={setUser} trigger={showPopUp} setShowPopUp={setShowPopUp}/>
            <div className="search_container">
            <form className="search">
                    <label>Search: 
                    <input
                        type='text'
                        name='search'
                        id="search"
                        placeholder="Search by classname"
                        value={search}
                        onChange={handleSearch}
                    />
                    </label>
                    <label>Difficulty: </label>
                    <label>
                    <select name='category' value={category} onChange={handleCategory}>
                        <option value="all">Choose a difficulty</option>
                        <option value='easy'>easy</option>
                        <option value='intermediate'>intermediate</option>
                        <option value='advanced'>advanced</option>
                    </select>
                    </label>
            </ form>
            </div>
        <div className="online_grid_container">

           {classToDisplay ? classToDisplay.map((oneOnlineClass)  => <OnlineClassCard setClassToDisplay={setClassToDisplay} classToDisplay={classToDisplay} oneOnlineClass={oneOnlineClass} setUser={setUser} user={user}/>) : "Loading"} 
        </div>
        </div>
       
    ) : error && error["error"] ? <h2>{error["error"]}</h2> : null


}

export default OnlineClass