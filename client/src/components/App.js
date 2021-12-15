import './App.css';
import { useEffect, useState } from 'react';
import {Route, Routes} from 'react-router-dom';
import NavBar from './NavBar';
import Piano from './Piano';
import Home from './Home';
import Login from './Login';


function App() {

  const [user, setUser] = useState()
  const [loggedInUser, setLoggedInUser] = useState(false);



  useEffect(() => {
    fetch('/me')
    .then(response => {
      if (response.ok) {
        response.json()
        .then(person => {
          setUser(person);
          setLoggedInUser(true)
        });
      }
    });
  }, []);
  

  return (
    <div className="App">
      <NavBar loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} setUser={setUser}/>
      <Routes>
      
      <Route path='/login' element={<Login setUser={setUser} setLoggedInUser={setLoggedInUser}/>} />
      <Route path='/' element={<Home />}/>
      <Route path='/piano' element={<Piano />}/>
      </Routes>
    </div>
   
  );
}

export default App;
