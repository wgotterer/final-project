import './App.css';
import { useEffect, useState } from 'react';
import {Route, Routes} from 'react-router-dom';
import NavBar from './NavBar';
import Piano from './Piano';
import Home from './Home';


function App() {

  const [user, setUser] = useState()


  useEffect(() => {
    fetch('/me')
    .then(response => {
      if (response.ok) {
        response.json()
        .then(user => {
          setUser(user);
        });
      }
    });
  }, []);
  

  return (
    <div className="App">
      <NavBar />
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/piano' element={<Piano />}/>
      </Routes>
    </div>
   
  );
}

export default App;
