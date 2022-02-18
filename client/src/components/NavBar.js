import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import home_piano from "../data/home_piano.png";
import piano_piano from "../data/piano_piano.png";
import teacher_piano from "../data/teacher_piano.png";
import purchased_piano from "../data/purchased_piano.png";
import calendar from "../data/calendar.png";

function NavBar({ loggedInUser, setLoggedInUser, setUser }) {
  let navigate = useNavigate();

  // destroys the session cookies
  function handleLogOut() {
    fetch("/api/logout", {
      method: "DELETE",
    }).then(() => {
      setLoggedInUser(false);
      setUser(null);
      navigate("/");
    });
  }

  return (
    <div>
      <h2> Piano with William</h2>
      {/* Link allows the an onClick that brings a user to desired path */}
      <Link to="/">
        <img height="40px" width="40px" src={home_piano} />
      </Link>{" "}
      <Link to="/piano">
        <img height="40px" width="40px" src={piano_piano} />
      </Link>{" "}
      <Link to="/follow-along-classes">
        <img height="40px" width="40px" src={teacher_piano} />
      </Link>{" "}
      <Link to="/purchased-classes">
        <img height="40px" width="40px" src={purchased_piano} />
      </Link>{" "}
      <Link to="/calendar">
        <img height="40px" width="40px" src={calendar} />
      </Link>{" "}
      <div className="button_container">
        <br />{" "}
        {loggedInUser === false ? (
          <Link to="/login">
            <button className="login_button">Log In</button>
          </Link>
        ) : (
          <>
            {" "}
            <button className="login_button" onClick={handleLogOut}>
              Logout
            </button>{" "}
          </>
        )}
      </div>
    </div>
  );
}

export default NavBar;
