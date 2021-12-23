
import React, {useState, useEffect} from "react";
import * as Tone from "tone";
import {
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
  } from "./Tones.js";

// CREATE NEW CHILD COMPONENTS FOR EACH SCALE

function Piano({user, error}) {

    // window.addEventListener("keydown", playNote )
    // document.querySelector(".piano").addEventListener("keydown", playNote);
    const [notePlayed, setNotePlayed] = useState()
    const [scale, setScale] = useState([])
    const [allScales, setAllScales] = useState()
    const [pianoType, setPianoType] = useState(0)

    useEffect(() => {
        fetch("/scales")
        .then(resp => resp.json())
        .then(allScales => setAllScales(allScales))
    }, [])




    function playNote(event) {
        if (event.keyCode === 65 && scale.length <= 7) {
          playC4();
          setNotePlayed(65)
          setScale([...scale, 65])
        }
        if (event.keyCode === 87 && scale.length <= 7) {
          playDb4();
          setNotePlayed(87)
          setScale([...scale, 87])
        }
        if (event.keyCode === 83 && scale.length <= 7) {
          playD4();
          setNotePlayed(83)
          setScale([...scale, 83])
        }
        if (event.keyCode === 69 && scale.length <= 7) {
          playEb4();
          setNotePlayed(69)
          setScale([...scale, 69])
        }
        if (event.keyCode === 68 && scale.length <= 7) {
          playE4();
          setNotePlayed(68)
          setScale([...scale, 68])
        }
        if (event.keyCode === 70 && scale.length <= 7) {
          playF4();
          setNotePlayed(70)
          setScale([...scale, 70])
        }
        if (event.keyCode === 84 && scale.length <= 7) {
          playGb4();
          setNotePlayed(84)
          setScale([...scale, 84])
        }
        if (event.keyCode === 71 && scale.length <= 7) {
          playG4();
          setNotePlayed(71)
          setScale([...scale, 71])
        }
        if (event.keyCode === 89 && scale.length <= 7) {
          playAb4();
          setNotePlayed(89)
          setScale([...scale, 89])
        }
        if (event.keyCode === 72 && scale.length <= 7) {
          playA4();
          setNotePlayed(72)
          setScale([...scale, 72])
        }
        if (event.keyCode === 85 && scale.length <= 7) {
          playBb4();
          setNotePlayed(85)
          setScale([...scale, 85])
        }
        if (event.keyCode === 74 && scale.length <= 7) {
          playB4();
          setNotePlayed(74)
          setScale([...scale, 74])
        }
        if (event.keyCode === 75 && scale.length <= 7) {
          playC5();
          setNotePlayed(75)
          setScale([...scale, 75])
        }
      }

      
  


      function compareScales(arrNotes, scale){
          if (scale.length === 8){ 
            return arrNotes.every((note, index) => {
                return note === scale[index]
            })
          }
      }

    function handleNewScale(){
        setPianoType(pianoType + 1)
        setScale([])
        setNotePlayed()
        
    }

    function handleRestart(){
        setScale([])
        setNotePlayed()
    }

    let arrNotes =  allScales && allScales[0] ? allScales[0]["notes"].split(', ').map((note)=>  parseInt(note)) : null


  return user ? (
    <div className="pianoPage" onKeyDown={playNote} tabIndex={1}>
    <h1>Piano</h1>
    <button>Start Playing</button>
   {pianoType === 0 ?  <div className="piano" onKeyDown={playNote} tabIndex={1}>
     {notePlayed === 65 ? <div  className="red-white-key" onClick={playC4}>A</div> : <div  className="white-key" onClick={playC4}>A</div>} 
     {notePlayed === 87 ? <div className="red-black-key" onClick={playDb4}>W</div> : <div className="black-key" onClick={playDb4}>W</div>}
     {notePlayed === 83 ? <div className="red-white-key" onClick={playD4}>S</div> : <div className="white-key" onClick={playD4}>S</div> }
     {notePlayed === 69 ? <div className="red-black-key" onClick={playEb4}>E</div> :<div className="black-key" onClick={playEb4}>E</div>}
     {notePlayed === 68 ? <div className="red-white-key" onClick={playE4}>D</div> :  <div className="white-key" onClick={playE4}>D</div> }
     {notePlayed === 70 ?<div className="red-white-key" onClick={playF4}>F</div> : <div className="white-key" onClick={playF4}>F</div>}
     {notePlayed === 84 ? <div className="red-black-key" onClick={playGb4}>T</div> : <div className="black-key" onClick={playGb4}>T</div> }
     {notePlayed === 71 ? <div className="red-white-key" onClick={playG4}>G</div> : <div className="white-key" onClick={playG4}>G</div>}
     {notePlayed === 89 ?<div className="red-black-key" onClick={playAb4}>Y</div> : <div className="black-key" onClick={playAb4}>Y</div>}
     {notePlayed === 72 ?<div className="red-white-key" onClick={playA4}>H</div> : <div className="white-key" onClick={playA4}>H</div>}
     {notePlayed === 85 ? <div className="red-black-key" onClick={playBb4}>U</div> : <div className="black-key" onClick={playBb4}>U</div>}
     {notePlayed === 74 ?<div className="red-white-key" onClick={playB4}>J</div> : <div className="white-key" onClick={playB4}>J</div>}
    {notePlayed === 75 ?<div className="red-white-key" onClick={playC5}>K</div> : <div className="white-key" onClick={playC5}>K</div>}
    </div> : null}

{/* D maj scale */}
    {pianoType === 1 ?  <div className="piano" onKeyDown={playNote} tabIndex={1}>
     {notePlayed === 65 ? <div  className="red-white-key" onClick={playC4}>A</div> : <div  className="white-key" onClick={playC4}>A</div>} 
     {notePlayed === 87 ? <div className="red-black-key" onClick={playDb4}>W</div> : <div className="black-key" onClick={playDb4}>W</div>}
     {notePlayed === 83 ? <div className="red-white-key" onClick={playD4}>S</div> : <div className="white-key" onClick={playD4}>S</div> }
     {notePlayed === 69 ? <div className="red-black-key" onClick={playEb4}>E</div> :<div className="black-key" onClick={playEb4}>E</div>}
     {notePlayed === 68 ? <div className="red-white-key" onClick={playE4}>D</div> :  <div className="white-key" onClick={playE4}>D</div> }
     {notePlayed === 70 ?<div className="red-white-key" onClick={playF4}>F</div> : <div className="white-key" onClick={playF4}>F</div>}
     {notePlayed === 84 ? <div className="red-black-key" onClick={playGb4}>T</div> : <div className="black-key" onClick={playGb4}>T</div> }
     {notePlayed === 71 ? <div className="red-white-key" onClick={playG4}>G</div> : <div className="white-key" onClick={playG4}>G</div>}
     {notePlayed === 89 ?<div className="red-black-key" onClick={playAb4}>Y</div> : <div className="black-key" onClick={playAb4}>Y</div>}
     {notePlayed === 72 ?<div className="red-white-key" onClick={playA4}>H</div> : <div className="white-key" onClick={playA4}>H</div>}
     {notePlayed === 85 ? <div className="red-black-key" onClick={playBb4}>U</div> : <div className="black-key" onClick={playBb4}>U</div>}
     {notePlayed === 74 ?<div className="red-white-key" onClick={playB4}>J</div> : <div className="white-key" onClick={playB4}>J</div>}
    {notePlayed === 75 ?<div className="red-white-key" onClick={playC5}>K</div> : <div className="white-key" onClick={playC5}>K</div>}
    {notePlayed === 87 ? <div className="red-black-key" onClick={playDb4}>W</div> : <div className="black-key" onClick={playDb4}>W</div>}
     {notePlayed === 83 ? <div className="red-white-key" onClick={playD4}>S</div> : <div className="white-key" onClick={playD4}>S</div> }
     {notePlayed === 69 ? <div className="red-black-key" onClick={playEb4}>E</div> :<div className="black-key" onClick={playEb4}>E</div>}
     {notePlayed === 68 ? <div className="red-white-key" onClick={playE4}>D</div> :  <div className="white-key" onClick={playE4}>D</div> }
    </div> : null}


    {compareScales(arrNotes, scale) ? <><h2>Good Job</h2><button onClick={handleNewScale}>Click for a new Scale</button></> : <h3>Play all 8 correct notes in the C major scale!</h3>}
    {scale.length === 8 & !compareScales(arrNotes, scale) ? <><h3>Yr stupid! Give up!</h3><button onClick={handleRestart}>Try Again</button></>: null}
  </div>
      ) : error && error["error"] ? <h2>{error["error"]}</h2> : null

  }

export default Piano