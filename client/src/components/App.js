import './App.css';
import { useEffect, useState } from 'react';
import {Route, Routes} from 'react-router-dom';
import NavBar from './NavBar';
import Piano from './Piano';
import Home from './Home';
import Login from './Login';
import OnlineClass from './OnlineClass';
import Purchased from './Purchased';
import Calendar from './Calendar';


function App() {

  const [user, setUser] = useState(null)
  const [loggedInUser, setLoggedInUser] = useState(false);
  const [error, setError] = useState()


  useEffect(() => {
    fetch('/api/me')
    .then(response => {
      if (response.ok) {
        response.json()
        .then(person => {
          setUser(person);
          setLoggedInUser(true)
        });
      }else {
        response.json()
        .then(oneError => {
          setError(oneError)
        });
      }
    });
  }, []);


  return (
    <div className="App">
      <NavBar loggedInUser={loggedInUser}  setLoggedInUser={setLoggedInUser} setUser={setUser}/>
      <Routes>
      
      <Route path='/login' element={<Login setUser={setUser} setLoggedInUser={setLoggedInUser}/>} />
      <Route path='/' element={<Home  loggedInUser={loggedInUser} user={user} />}/>
      
      <Route path='/piano' element={<Piano user={user} error={error} />}/>
      <Route path='/follow-along-classes' element={<OnlineClass setUser={setUser} error={error} user={user} />}/>
      <Route path='/purchased-classes' element={<Purchased error={error} user={user} />}/>
      <Route path='/calendar' element={<Calendar error={error} user={user} />}/>
    
      </Routes>
    </div>
  ) 

}

export default App;
