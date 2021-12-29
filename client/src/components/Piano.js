
import React, {useState, useEffect} from "react";
import * as Tone from "tone";
import Cmaj from "./MajScales/Cmaj.js";
import Dmaj from "./MajScales/Dmaj.js";
import Emaj from "./MajScales/Emaj.js";
import Fmaj from "./MajScales/Fmaj.js";
import Amaj from "./MajScales/Amaj.js";
import Gmaj from "./MajScales/Gmaj.js";
import Bmaj from "./MajScales/Bmaj.js";
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
    const [pianoType, setPianoType] = useState(0)

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
    


  return user ? (

     <div className="pianoPage">
    <h1>Piano</h1>
    
    <Cmaj handleNewScale={handleNewScale} handleRestart={handleRestart} notePlayed={notePlayed} setNotePlayed={setNotePlayed} scale={scale} setScale={setScale} allScales={allScales} pianoType={pianoType} />

    <Dmaj handleNewScale={handleNewScale} handleRestart={handleRestart} notePlayed={notePlayed} setNotePlayed={setNotePlayed} scale={scale} setScale={setScale} allScales={allScales} pianoType={pianoType} />

    <Emaj handleNewScale={handleNewScale} handleRestart={handleRestart} notePlayed={notePlayed} setNotePlayed={setNotePlayed} scale={scale} setScale={setScale} allScales={allScales} pianoType={pianoType} />

    <Fmaj handleNewScale={handleNewScale} handleRestart={handleRestart} notePlayed={notePlayed} setNotePlayed={setNotePlayed} scale={scale} setScale={setScale} allScales={allScales} pianoType={pianoType} />

    <Gmaj handleNewScale={handleNewScale} handleRestart={handleRestart} notePlayed={notePlayed} setNotePlayed={setNotePlayed} scale={scale} setScale={setScale} allScales={allScales} pianoType={pianoType} />

    <Amaj handleNewScale={handleNewScale} handleRestart={handleRestart} notePlayed={notePlayed} setNotePlayed={setNotePlayed} scale={scale} setScale={setScale} allScales={allScales} pianoType={pianoType} />

    <Bmaj handleNewScale={handleNewScale} handleRestart={handleRestart} notePlayed={notePlayed} setNotePlayed={setNotePlayed} scale={scale} setScale={setScale} allScales={allScales} pianoType={pianoType} />


  </div>
      ) : error && error["error"] ? <h2>{error["error"]}</h2> : null
  }

export default Piano