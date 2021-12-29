
import React from 'react'
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
  } from "../Tones.js";

  function Gmaj({handleNewScale, handleRestart, notePlayed, setNotePlayed, scale, setScale, allScales, pianoType, setPianoType}) {

    function playGmajNote(event) {

        if (event.keyCode === 65 && scale.length <= 7) {
          playG3();
          setNotePlayed(65) 
          setScale([...scale, 65])
        }
        if (event.keyCode === 87 && scale.length <= 7) {
          playAb3();
          setNotePlayed(87)
          setScale([...scale, 87])
        }
        
      if (event.keyCode === 83 && scale.length <= 7) {       
          playA3();
          setNotePlayed(83)
          setScale([...scale, 83])
        }
        if (event.keyCode === 69 && scale.length <= 7) {
          playBb3();
          setNotePlayed(69)
          setScale([...scale, 69])
        }
        if (event.keyCode === 68 && scale.length <= 7) {
          playB3();
          setNotePlayed(68)
          setScale([...scale, 68])
        }
        if (event.keyCode === 70 && scale.length <= 7) {
          playC4();
          setNotePlayed(70)
          setScale([...scale, 70])
        }
        if (event.keyCode === 84 && scale.length <= 7) {
          playDb4();
          setNotePlayed(84)
          setScale([...scale, 84])
        }
        if (event.keyCode === 72 && scale.length <= 7) {
          playD4();
          setNotePlayed(72)
          setScale([...scale, 72])
        }
        if (event.keyCode === 85 && scale.length <= 7) {
          playEb4();
          setNotePlayed(85)
          setScale([...scale, 85])
        }
        if (event.keyCode === 74 && scale.length <= 7) {
          playE4();
          setNotePlayed(74)
          setScale([...scale, 74])
        }
        if (event.keyCode === 75 && scale.length <= 7) {
          playF4();
          setNotePlayed(75)
          setScale([...scale, 75])
        }
        if (event.keyCode === 79 && scale.length <= 7) {
          playGb4();
          setNotePlayed(79)
          setScale([...scale, 79])
        }
        if (event.keyCode === 76 && scale.length <= 7) {
          playG4();
          setNotePlayed(76) 
          setScale([...scale, 76])
        }
      }
      let arrNotesGmaj =  allScales && allScales[4] ? allScales[4]["notes"].split(', ').map((note)=>  parseInt(note)) : null

      function compareGmajScales(arrNotesGmaj, scale){
        if (scale.length === 8){ 
          return arrNotesGmaj.every((note, index) => {
              return note === scale[index]
          })
        }
    }
console.log(arrNotesGmaj)
console.log(scale)

// !!!!!!!!!!! Change pianotype to 5 when create the G major scale
    return (
        <div>{pianoType === 4 ?  <div className="piano" onKeyDown={playGmajNote} tabIndex={1}>
        <div><button>Start playing</button> </div>
        <div className="white-key"> </div>
        <div className="black-key" ></div> 
        {notePlayed === 65 ?<div className="red-white-key" onClick={playG3}>A</div> : <div className="white-key" onClick={playB4}>A</div>}
        {notePlayed === 87 ? <div className="red-black-key" onClick={playAb3}>W</div> : <div className="black-key" onClick={playBb4}>W</div>}
        {notePlayed === 83 ?<div className="red-white-key" onClick={playA3}>S</div> : <div className="white-key" onClick={playB4}>S</div>}
        {notePlayed === 69 ? <div className="red-black-key" onClick={playBb3}>E</div> : <div className="black-key" onClick={playBb4}>E</div>}
        {notePlayed === 68 ?<div className="red-white-key" onClick={playB3}>D</div> : <div className="white-key" onClick={playB4}>D</div>}
        {notePlayed === 70 ? <div  className="red-white-key" onClick={playC4}>F</div> : <div  className="white-key" onClick={playC4}>F</div>} 
        {notePlayed === 84 ? <div className="red-black-key" onClick={playDb4}>T</div> : <div className="black-key" onClick={playDb4}>T</div>}
        {notePlayed === 72 ? <div className="red-white-key" onClick={playD4}>H</div> : <div className="white-key" onClick={playD4}>H</div> }
        {notePlayed === 85 ? <div className="red-black-key" onClick={playEb4}>U</div> :<div className="black-key" onClick={playEb4}>U</div>}
        {notePlayed === 74 ? <div className="red-white-key" onClick={playE4}>J</div> :  <div className="white-key" onClick={playE4}>J</div> }
        {notePlayed === 75 ? <div className="red-white-key" onClick={playF4}>K</div> : <div className="white-key" onClick={playF4}>K</div>}
        {notePlayed === 79 ? <div className="red-black-key" onClick={playGb4}>O</div> : <div className="black-key" onClick={playGb4}>O</div> }
        {notePlayed === 76 ? <div className="red-white-key" onClick={playG4}>L</div> : <div className="white-key" onClick={playA4}>L</div>}
        <div className="black-key"></div>
        <div className="white-key"> </div>
        <div className="black-key"></div>
        <div className="white-key"> </div>   
        <div className="white-key"> </div>   
        
        </div> : null}
        {compareGmajScales(arrNotesGmaj, scale) && pianoType === 4  ? <><h2>Good Job</h2><button onClick={handleNewScale}>Click for a new Scale</button></> : pianoType === 4 ? <h3>Play all 8 correct notes in the G major scale!</h3>: null}
        {scale.length === 8 & !compareGmajScales(arrNotesGmaj, scale) && pianoType === 4  ? <><h3>Good Try! Don't Worry!</h3><button onClick={handleRestart}>Try Again</button></>: null}

        </div>
    )
}

export default Gmaj 
