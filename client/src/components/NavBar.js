import React from 'react'
import {Link} from 'react-router-dom';
import {useNavigate} from "react-router-dom";

 function NavBar() {

    let navigate = useNavigate();

    return (
        <div>
            <Link to='/'>Home</Link> {' '}
            <Link to='/piano'>Piano Game</Link> {' '}
        </div>
    )
}

export default NavBar