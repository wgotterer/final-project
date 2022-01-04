import React from 'react'
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
  } from "../Tones.js";

 function Cmaj({telePiano, handleNewScale, handleRestart, notePlayed, setNotePlayed, scale, setScale, allScales, pianoType, setPianoType}) {

    function playCmajNote(event) {
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
      let arrNotesCmaj =  allScales && allScales[0] ? allScales[0]["notes"].split(', ').map((note)=>  parseInt(note)) : null

      function compareCmajScales(arrNotesCmaj, scale){
        if (scale.length === 8){ 
          return arrNotesCmaj.every((note, index) => {
              return note === scale[index]
          })
        }
    }
    
    

    return (
        <div>
          {compareCmajScales(arrNotesCmaj, scale) && pianoType === 0  ? <><h2>Good Job</h2><button className="new_scale_button"  onClick={handleNewScale}>Click for a new Scale</button></> : pianoType === 0 ? <h3>Play all 8 correct notes in the C major scale!</h3>: null}
    {scale.length === 8 & !compareCmajScales(arrNotesCmaj, scale) && pianoType === 0  ? <><h3>Good Try! Don't Worry!</h3><button className="new_scale_button" onClick={handleRestart}>Try Again</button></>: null}

             {pianoType === 0 ?  <div className="piano" onKeyDown={playCmajNote} tabIndex={1}>
       <div><button className="start_piano">CLICK TO<br />POWER ON<br /> PIANO</button> </div>
     {notePlayed === 65 ?  <div className="red-white-key" onClick={playC4}>A</div> : telePiano ? <div  className="white-key-tele" onClick={playC4}>A</div> : <div  className="white-key" onClick={playC4}>A</div> } 
     {notePlayed === 87 ? <div className="red-black-key" onClick={playDb4}>W</div> : telePiano ? <div className="black-key-tele" onClick={playDb4}>W</div> : <div className="black-key" onClick={playDb4}>W</div>}
     {notePlayed === 83 ? <div className="red-white-key" onClick={playD4}>S</div> : telePiano ? <div className="white-key-tele" onClick={playD4}>S</div> : <div className="white-key" onClick={playD4}>S</div>  }
     {notePlayed === 69 ? <div className="red-black-key" onClick={playEb4}>E</div> :telePiano ? <div className="black-key-tele" onClick={playEb4}>E</div>: <div className="black-key" onClick={playEb4}>E</div>}
     {notePlayed === 68 ? <div className="red-white-key" onClick={playE4}>D</div> :  telePiano ? <div className="white-key-tele" onClick={playE4}>D</div> : <div className="white-key" onClick={playE4}>D</div>}
     {notePlayed === 70 ?<div className="red-white-key" onClick={playF4}>F</div> : telePiano ? <div className="white-key-tele" onClick={playF4}>F</div> : <div className="white-key" onClick={playF4}>F</div>}
     {notePlayed === 84 ? <div className="red-black-key" onClick={playGb4}>T</div> : telePiano ? <div className="black-key-tele" onClick={playGb4}>T</div> : <div className="black-key" onClick={playGb4}>T</div> }
     {notePlayed === 71 ? <div className="red-white-key" onClick={playG4}>G</div> : telePiano ? <div className="white-key-tele" onClick={playG4}>G</div> : <div className="white-key" onClick={playG4}>G</div>}
     {notePlayed === 89 ?<div className="red-black-key" onClick={playAb4}>Y</div> : telePiano ? <div className="black-key-tele" onClick={playAb4}>Y</div>: <div className="black-key" onClick={playAb4}>Y</div>}
     {notePlayed === 72 ?<div className="red-white-key" onClick={playA4}>H</div> : telePiano ? <div className="white-key-tele" onClick={playA4}>H</div>: <div className="white-key" onClick={playA4}>H</div>}
     {notePlayed === 85 ? <div className="red-black-key" onClick={playBb4}>U</div> : telePiano ? <div className="black-key-tele" onClick={playBb4}>U</div>: <div className="black-key" onClick={playBb4}>U</div>}
     {notePlayed === 74 ?<div className="red-white-key" onClick={playB4}>J</div> : telePiano ? <div className="white-key-tele" onClick={playB4}>J</div> : <div className="white-key" onClick={playB4}>J</div>}
    {notePlayed === 75 ?<div className="red-white-key" onClick={playC5}>K</div> : telePiano ? <div className="white-key-tele" onClick={playC5}>K</div> : <div className="white-key" onClick={playC5}>K</div>}
    </div> : null}
    
        </div>
    )

    
}

export default Cmaj
