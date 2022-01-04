
import React, {useState, useEffect} from "react";
import * as Tone from "tone";
import StartScale from "./MajScales/StartScale.js";
import Cmaj from "./MajScales/Cmaj.js";
import Dmaj from "./MajScales/Dmaj.js";
import Emaj from "./MajScales/Emaj.js";
import Fmaj from "./MajScales/Fmaj.js";
import Amaj from "./MajScales/Amaj.js";
import Gmaj from "./MajScales/Gmaj.js";
import Bmaj from "./MajScales/Bmaj.js";
import tinkywinky from "../data/tinky-winky.png"
import piano_piano from "../data/piano_piano.png"
import {
    playF3,
    playGb3,
    playG3,
    playAb3,
    playA3, 
    playBb3,
    playB3,
    playC4,
    playDb4,
    playD4,
    playEb4,
    playE4,
    playF4,
    playGb4,
    playG4,
    playAb4,
    playA4,
    playBb4,
    playB4,
    playC5,
    playDb5,
    playD5,
    playEb5,
    playE5,
    playF5,
    playGb5
  } from "./Tones.js";
  

// CREATE NEW CHILD COMPONENTS FOR EACH SCALE

function Piano({user, error}) {

    const [notePlayed, setNotePlayed] = useState()
    const [scale, setScale] = useState([])
    const [allScales, setAllScales] = useState()
    const [pianoType, setPianoType] = useState(-1)
    const [telePiano, setTelePiano] = useState(false)

    useEffect(() => {
        fetch("/scales")
        .then(resp => resp.json())
        .then(allScales => setAllScales(allScales))
    }, [])

    function handleNewScale(){
        setPianoType(pianoType + 1)
        setScale([])
        setNotePlayed()
        
    }

    function handleRestart(){
        setScale([])
        setNotePlayed()
    }
    
    function handleTelePiano(){
      setTelePiano(!telePiano)
    }

console.log(pianoType)

  return user ? (

     <div className="pianoPage">
    <h3>Practice your scales by playing the correct notes on your keyboard</h3>
    {telePiano ? <img onClick={handleTelePiano}  src={piano_piano}  width="100px" height="100px" /> : <img onClick={handleTelePiano}  src={tinkywinky}  width="100px" height="100px" />}
    
    <StartScale handleNewScale={handleNewScale} pianoType={pianoType} setPianoType={setPianoType}/>

    <Cmaj telePiano={telePiano} handleNewScale={handleNewScale} handleRestart={handleRestart} notePlayed={notePlayed} setNotePlayed={setNotePlayed} scale={scale} setScale={setScale} allScales={allScales} pianoType={pianoType} />

    <Dmaj telePiano={telePiano} handleNewScale={handleNewScale} handleRestart={handleRestart} notePlayed={notePlayed} setNotePlayed={setNotePlayed} scale={scale} setScale={setScale} allScales={allScales} pianoType={pianoType} />

    <Emaj  telePiano={telePiano} handleNewScale={handleNewScale} handleRestart={handleRestart} notePlayed={notePlayed} setNotePlayed={setNotePlayed} scale={scale} setScale={setScale} allScales={allScales} pianoType={pianoType} />

    <Fmaj telePiano={telePiano} handleNewScale={handleNewScale} handleRestart={handleRestart} notePlayed={notePlayed} setNotePlayed={setNotePlayed} scale={scale} setScale={setScale} allScales={allScales} pianoType={pianoType} />

    <Gmaj telePiano={telePiano} handleNewScale={handleNewScale} handleRestart={handleRestart} notePlayed={notePlayed} setNotePlayed={setNotePlayed} scale={scale} setScale={setScale} allScales={allScales} pianoType={pianoType} />

    <Amaj telePiano={telePiano} handleNewScale={handleNewScale} handleRestart={handleRestart} notePlayed={notePlayed} setNotePlayed={setNotePlayed} scale={scale} setScale={setScale} allScales={allScales} pianoType={pianoType} />

    <Bmaj telePiano={telePiano} handleNewScale={handleNewScale} handleRestart={handleRestart} notePlayed={notePlayed} setNotePlayed={setNotePlayed} scale={scale} setScale={setScale} allScales={allScales} pianoType={pianoType} setPianoType={setPianoType} />


  </div>
      ) : error && error["error"] ? <h2>{error["error"]}</h2> : null
  }

export default Piano