import React, {useState, useEffect} from 'react'
import PopUpFun from './PopUpFun'

 function Home() {

    const [timedPopup, setTimedPopup] = useState(false)


    useEffect(() => {
        setTimeout(() => {
            setTimedPopup(true)
        }, 3000);
     }, [])

    return (
        <div>
           <h2> Piano with William</h2>
           <h4>Have always wanted to learn piano?</h4>
           <h5>You came to the right place! Here at Piano with William you get access to free follow along classes as well as premium follow alongs as well! And to really hone in your skill, sign up for a one on one session with the man himself, William!</h5>
           <PopUpFun trigger={timedPopup} setShowPopUp={setTimedPopup}/>

        </div>
        
    )
}

export default Home