import React, {useState} from 'react'
import './Popup.css'

 function Popup(props) {

    const [classFormData, setClassFormData] = useState({
        credit: '',
        name: '',
        valid: '',
        cvc: ''
    })

    function handleClassChange(e){
        setClassFormData({...classFormData, [e.target.name]: [e.target.value]})
    }

    function handleClosePopup(){
        props.setShowPopUp(false)
    }

    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close_button" onClick={handleClosePopup}>close</button>
                    {/* {props.children} */}
                    <h2>Private Class Sign Up</h2>
                    <form className="private_class_form_container">
                        <label>Credit Card Number</label>
                        <label>
                        <input
                            type='text'
                            name='credit'
                            value={classFormData.credit}
                            onChange={handleClassChange}
                            placeholder="credit card number"
                        />
                        </label>
                        
                    </form>
            </div>
        </div>
    ) : ""
}

export default Popup
