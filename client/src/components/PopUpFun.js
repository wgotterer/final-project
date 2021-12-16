import React from 'react'
import './Popup.css'

 function PopUpFun(props) {

    

    function handleClosePopup(){
        props.setShowPopUp(false)
    }

    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <div className="blink_me">
                <h3 class>Mature Women Ready To Meet In Your Area!</h3>
                <h4>Click Below</h4>
                
                <img heigh="300" width="300" src="https://i.ytimg.com/vi/uxPjZL8MTSI/maxresdefault.jpg"/>
                </div>
                <button>MEET</button>
                <button className="close_button" onClick={handleClosePopup}>X</button>
                    {/* {props.children} */}
                    
            </div>
        </div>
    ) : ""
}

export default PopUpFun
