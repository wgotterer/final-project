import React, { useState } from "react";
import "./Popup.css";
import { useNavigate } from "react-router-dom";

function Popup(props) {
  let navigate = useNavigate();
  const [newPrivateClass, setNewPrivateClass] = useState();
  const [classFormData, setClassFormData] = useState({
    credit: "",
    name: "",
    valid: "",
    cvc: "",
    date: "",
    goal: "",
  });

  function handleClassChange(e) {
    setClassFormData({ ...classFormData, [e.target.name]: e.target.value });
  }

  function handleClosePopup() {
    props.setShowPopUp(false);
  }

  // post request on submission that creates a class with date, goal, id
  function handleSubmitPrivate(e) {
    e.preventDefault();
    fetch("/api/private_classes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date: classFormData.date,
        goal: classFormData.goal,
        user_id: props.user.id,
      }),
    })
      .then((resp) => resp.json())
      .then((newPrivateClass) => {
        setNewPrivateClass(newPrivateClass);
        // to re-render the page to see the new private class
        // set state to the current user data with spread operator
        // update the private classes array with the current private classes plus the new one
        props.setUser((userData) => ({
          ...userData,
          private_classes: [...userData["private_classes"], newPrivateClass],
        }));
      });
    setClassFormData({
      credit: "",
      name: "",
      valid: "",
      cvc: "",
      date: "",
      goal: "",
    });
    navigate("/calendar");
  }

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close_button" onClick={handleClosePopup}>
          close
        </button>
        <h2>Private Class Sign Up</h2>
        <form
          onSubmit={handleSubmitPrivate}
          className="private_class_form_container"
        >
          <label>Class Date and Time</label>
          <label>
            <input
              type="datetime-local"
              name="date"
              value={classFormData.date}
              onChange={handleClassChange}
              placeholder="date and time"
            />
          </label>
          <label>Class Goal</label>
          <label>
            <input
              type="text"
              name="goal"
              value={classFormData.goal}
              onChange={handleClassChange}
              placeholder="goal"
            />
          </label>
          <label>Credit Card Number</label>
          <label>
            <input
              type="number"
              name="credit"
              value={classFormData.credit}
              onChange={handleClassChange}
              placeholder="credit card number"
            />
          </label>
          <label> Full Name: </label>
          <label>
            <input
              type="text"
              name="name"
              value={classFormData.name}
              onChange={handleClassChange}
              placeholder="Full Name"
            />
          </label>
          <label> Valid Through: </label>
          <label>
            <input
              type="month"
              name="valid"
              value={classFormData.valid}
              onChange={handleClassChange}
            />
          </label>
          <label> CVC: </label>
          <label>
            <input
              type="number"
              name="cvc"
              value={classFormData.cvc}
              onChange={handleClassChange}
            />
          </label>
          <label>
            <input type="submit" />
          </label>
        </form>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
