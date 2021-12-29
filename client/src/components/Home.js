import React, {useState, useEffect} from 'react'
import PopUpFun from './PopUpFun'
import snoopy from "../data/snoopy.png"


 function Home( {user, loggedInUser}) {

    // const [timedPopup, setTimedPopup] = useState(false)


    // useEffect(() => {
    //     setTimeout(() => {
    //         setTimedPopup(true)
    //     }, 3000);
    //  }, [])

    return (
        // <div className="area" >
        <div className="home_container" >
            
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
           <div className="home_grid_container">
           <h3>Your piano journey starts here!</h3>
           {user && loggedInUser ? <h1>Hello {user.name}!</h1> : <h1>Please sign in!</h1>}
           <h5 className="home_info">At Piano with William you get access to free follow along classes as well as premium follow alongs as well! And to really hone in your skill, sign up for a one on one session with the man himself, William!</h5>
           <img src={snoopy} width="400px" height="400px"></img>
           </div>
           {/* <PopUpFun trigger={timedPopup} setShowPopUp={setTimedPopup}/> */}
        </div>
        
    )
}

export default Home