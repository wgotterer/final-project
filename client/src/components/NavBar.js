import React from 'react'
import {Link} from 'react-router-dom';
import {useNavigate} from "react-router-dom";

 function NavBar({loggedInUser, setLoggedInUser, setUser}) {

    let navigate = useNavigate();

    function handleLogOut() {
        fetch("/logout", {
            method: "DELETE"
        })
        .then(() => {
            setLoggedInUser(false);
            setUser({});
            navigate('/');
        });
    }

    return (
        <div>
            {loggedInUser === false ? <Link to='/login'><button>Log In</button></Link> : <> <button onClick={handleLogOut}>Logout</button> </>}

            <Link to='/'>Home</Link> {' '}
            <Link to='/piano'>Piano Game</Link> {' '}
        </div>
    )
}

export default NavBar