import React from 'react'
import {
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
    playE5
  } from "../Tones.js";

  function Emin({ telePiano, handleNewScale, handleRestart, notePlayed, setNotePlayed, scale, setScale, allScales, pianoType, setPianoType}) {

    function playEminNote(event) {
        
        if (event.keyCode === 65 && scale.length <= 7) {
          playE4();
          setNotePlayed(65)
          setScale([...scale, 65])
        }
        if (event.keyCode === 83 && scale.length <= 7) {
          playF4();
          setNotePlayed(83)
          setScale([...scale, 83])
        }
        if (event.keyCode === 69 && scale.length <= 7) {
          playGb4();
          setNotePlayed(69)
          setScale([...scale, 69])
        }
        if (event.keyCode === 68 && scale.length <= 7) {
          playG4();
          setNotePlayed(68)
          setScale([...scale, 68])
        }
        if (event.keyCode === 82 && scale.length <= 7) {
          playAb4();
          setNotePlayed(82)
          setScale([...scale, 82])
        }
        if (event.keyCode === 70 && scale.length <= 7) {
          playA4();
          setNotePlayed(70)
          setScale([...scale, 70])
        }
        if (event.keyCode === 84 && scale.length <= 7) {
          playBb4();
          setNotePlayed(84)
          setScale([...scale, 84])
        }
        if (event.keyCode === 72 && scale.length <= 7) {
          playB4();
          setNotePlayed(72)
          setScale([...scale, 72])
        }
        if (event.keyCode === 74 && scale.length <= 7) {
          playC5();
          setNotePlayed(74)
          setScale([...scale, 74])
        }
        if (event.keyCode === 73 && scale.length <= 7) {
          playDb5();
          setNotePlayed(73)
          setScale([...scale, 73])
        }
        if (event.keyCode === 75 && scale.length <= 7) {
          playD5();
          setNotePlayed(75)
          setScale([...scale, 75])
        }
        if (event.keyCode === 79 && scale.length <= 7) {
            playEb5();
            setNotePlayed(79)
            setScale([...scale, 79])
          }
          if (event.keyCode === 76 && scale.length <= 7) {
            playE5();
            setNotePlayed(76)
            setScale([...scale, 76])
          }
      }

      function compareEminScales(arrNotesEmin, scale){
        if (scale.length === 8){ 
          return arrNotesEmin.every((note, index) => {
              return note === scale[index]
          })
        }
    }

    let arrNotesEmin =  allScales && allScales[9] ? allScales[9]["notes"].split(', ').map((note)=>  parseInt(note)) : null
    return (
        <div>
          {compareEminScales(arrNotesEmin, scale) && pianoType === 2 ? <><h2>Good Job</h2><button className="new_scale_button" onClick={handleNewScale}>Click for a new Scale</button></> : pianoType === 2  ? <h3>Play all 8 correct notes in the E minor scale!</h3>: null }
    {scale.length === 8 && !compareEminScales(arrNotesEmin, scale) && pianoType === 2 ? <><h3>Good Try! Don't Worry!</h3><button className="new_scale_button" onClick={handleRestart}>Try Again</button></>: null}
              {/* E maj scale */}
    {pianoType === 2 ?  <div className="piano" onKeyDown={playEminNote} tabIndex={1}>
    <div className="start_container"><button className="start_piano">CLICK TO<br />POWER ON<br /> PIANO</button> </div>
    {telePiano ? <div className="white-key-tele"></div>  : <div className="white-key"></div>}
    {telePiano ? <div className="black-key-tele"></div>  : <div className="black-key"></div>}
    {telePiano ? <div className="white-key-tele"></div>  : <div className="white-key"></div>}
    {telePiano ? <div className="black-key-tele"></div>  : <div className="black-key"></div>}
     {notePlayed === 65 ? <div className="red-white-key" onClick={playE4}>A</div> : !telePiano ?  <div className="white-key" onClick={playE4}>A</div> : <div className="white-key-tele" onClick={playE4}>A</div> }
     {notePlayed === 83 ?<div className="red-white-key" onClick={playF4}>S</div> : !telePiano ? <div className="white-key" onClick={playF4}>S</div> : <div className="white-key-tele" onClick={playF4}>S</div>}
     {notePlayed === 69 ? <div className="red-black-key" onClick={playGb4}>E</div> : !telePiano ?  <div className="black-key" onClick={playGb4}>E</div> : <div className="black-key-tele" onClick={playGb4}>E</div>}
     {notePlayed === 68 ? <div className="red-white-key" onClick={playG4}>D</div> : !telePiano ?  <div className="white-key" onClick={playG4}>D</div> : <div className="white-key-tele" onClick={playG4}>D</div>}
     {notePlayed === 82 ?<div className="red-black-key" onClick={playAb4}>R</div> : !telePiano ?  <div className="black-key" onClick={playAb4}>R</div>:  <div className="black-key-tele" onClick={playAb4}>R</div>}
     {notePlayed === 70 ?<div className="red-white-key" onClick={playA4}>F</div> : !telePiano ?  <div className="white-key" onClick={playA4}>F</div> : <div className="white-key-tele" onClick={playA4}>F</div>}
     {notePlayed === 84 ? <div className="red-black-key" onClick={playBb4}>T</div> : !telePiano ?  <div className="black-key" onClick={playBb4}>T</div> : <div className="black-key-tele" onClick={playBb4}>T</div>}
     {notePlayed === 72 ?<div className="red-white-key" onClick={playB4}>H</div> : !telePiano ?  <div className="white-key" onClick={playB4}>H</div> : <div className="white-key-tele" onClick={playB4}>H</div>}
    {notePlayed === 74 ?<div className="red-white-key" onClick={playC5}>J</div> : !telePiano ?  <div className="white-key" onClick={playC5}>J</div> : <div className="white-key-tele" onClick={playC5}>J</div>}
    {notePlayed === 73 ? <div className="red-black-key" onClick={playDb5}>I</div> : !telePiano ?  <div className="black-key" onClick={playDb5}>I</div>:  <div className="black-key-tele" onClick={playDb5}>I</div>}
     {notePlayed === 75 ? <div className="red-white-key" onClick={playD5}>K</div> : !telePiano ?  <div className="white-key" onClick={playD5}>K</div> : <div className="white-key-tele" onClick={playD5}>K</div> }
     {notePlayed === 79 ? <div className="red-black-key" onClick={playEb5}>O</div> : !telePiano ?  <div className="black-key" onClick={playEb5}>O</div> : <div className="black-key-tele" onClick={playEb5}>O</div> }
     {notePlayed === 76 ? <div className="red-white-key" onClick={playE5}>L</div> : !telePiano ?  <div className="white-key" onClick={playE5}>L</div> : <div className="white-key-tele" onClick={playE5}>L</div> }
    </div> : null}

     </div>
    )
}

export default Emin
