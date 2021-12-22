import React from 'react'
import {useState} from 'react';
import {useNavigate} from "react-router-dom";

function Login({setUser, setLoggedInUser}) {

    const [error, setError] = useState()
    const [showSignUp, setShowSignUp] = useState(false)
    let navigate = useNavigate();
    
    const [loginFormData, setLoginFormData] = useState({
        username: '',
        password: ''
    });
    const [signupFormData, setSignupFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        confirm: ''
    });

    function handleLoginChange(event) {
        setLoginFormData({...loginFormData, [event.target.name]: event.target.value});
    }

    function handleSignupChange(event) {
        setSignupFormData({...signupFormData, [event.target.name]: event.target.value});
    }


    function handleLogin(event) {
        event.preventDefault();
        fetch('/login', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginFormData)
        })
        .then(resp => {
            if (resp.ok){
                resp.json()
                .then(data => {
                    console.log(data)
                    setUser(data);
                    setLoggedInUser(true);
                    setLoginFormData({
                        username: '',
                        password: ''
                    });
                    navigate("/")
                });
            } else {
                resp.json()
              .then(oneError => {
               setError(oneError)
                });
                setLoginFormData({
                    username: '',
                    password: ''
                });
                navigate("/login")
                alert("Incorrect username or password")
            }
            // How to use the error to display in alert instead of hardcode
        }) 
    }

    function handleSignup(event) {
        event.preventDefault();
        fetch('/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(signupFormData)
        })
        .then(resp => resp.json())
        .then(data => {
            setLoggedInUser(true);
            setUser(data);
            setSignupFormData({
                name: '',
                username: '',
                email: '',
                password: '',
                confirm: ''
            })
            navigate("/")
        });
    }

    function handleShowSignUp(){
        setShowSignUp(!showSignUp)
    }


    return (
        
        <div className='Login'>
            
            <h2> Log in:</h2>
            <form className="login_form_container" onSubmit={handleLogin}>
                <label> Username: </label>
                <label>
                <input 
                    type='text'
                    name='username'
                    value={loginFormData.username}
                    onChange={handleLoginChange}
                    placeholder="username"
                />
                </label>
                <label> Password: </label>
                <label>
                <input
                    type='password'
                    name='password'
                    value={loginFormData.password}
                    onChange={handleLoginChange}
                    placeholder="password"
                />
                </label>
                <label>
                <input
                    type='submit'
                />
                </label>
            </form>
                    
            <h2>Create an account:</h2>
            <button onClick={handleShowSignUp}>{showSignUp ? "Close" : "Sign Up"}</button>

            {showSignUp ? 
            <form className="sign_up_form_container" onSubmit={handleSignup}>
                <label> Name: </label>
                <label> 
                <input
                    id="fname"
                    type='text'
                    name='name'
                    value={signupFormData.name}
                    onChange={handleSignupChange}
                    placeholder="name"
                />
                </label>
                <label> Username: </label>
                <label>
                <input
                    type='text'
                    name='username'
                    value={signupFormData.username}
                    onChange={handleSignupChange}
                    placeholder="username"
                />
                </label>
                <label> Email: </label>
                <label>
                <input
                    type='text'
                    name='email'
                    value={signupFormData.email}
                    onChange={handleSignupChange}
                    placeholder="email"
                />
                </label>

                <label> Password: </label>
                <label>
                <input
                    type='password'
                    name='password'
                    value={signupFormData.password}
                    onChange={handleSignupChange}
                    placeholder="password"
                />
                </label>
                <label> Confirm Password </label>
                <label> 
                <input
                    type='password'
                    name='confirm'
                    value={signupFormData.confirm}
                    onChange={handleSignupChange}
                    placeholder="confirm password"
                />
                </label>
                <input
                    type='submit'
                />
            </form>
            : null}
        </div>
    )
}

export default Login;
