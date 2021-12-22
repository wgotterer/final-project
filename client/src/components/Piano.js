
import React, {useState} from "react";
import * as Tone from "tone";



function Piano({user, error}) {

    // window.addEventListener("keydown", playNote )
    // document.querySelector(".piano").addEventListener("keydown", playNote);
    const [notePlayed, setNotePlayed] = useState()


    function playNote(event) {
        if (event.keyCode === 65) {
          playC4();
          setNotePlayed(65)
        }
        if (event.keyCode === 87) {
          playDb4();
          setNotePlayed(87)
        }
        if (event.keyCode === 83) {
          playD4();
          setNotePlayed(83)
        }
        if (event.keyCode === 69) {
          playEb4();
          setNotePlayed(69)
        }
        if (event.keyCode === 68) {
          playE4();
          setNotePlayed(68)
        }
        if (event.keyCode === 70) {
          playF4();
          setNotePlayed(70)
        }
        if (event.keyCode === 84) {
          playGb4();
          setNotePlayed(84)
        }
        if (event.keyCode === 71) {
          playG4();
          setNotePlayed(71)
        }
        if (event.keyCode === 89) {
          playAb4();
          setNotePlayed(89)
        }
        if (event.keyCode === 72) {
          playA4();
          setNotePlayed(72)
        }
        if (event.keyCode === 85) {
          playBb4();
          setNotePlayed(85)
        }
        if (event.keyCode === 74) {
          playB4();
          setNotePlayed(74)
        }
        if (event.keyCode === 75) {
          playC5();
          setNotePlayed(75)
        }
      }

   function playC4() {
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease("C4", "8n");

      }
     function playDb4() {
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease("Db4", "8n");
      }
     function playD4() {
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease("D4", "8n");
      }
     function playEb4() {
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease("Eb4", "8n");
      }
     function playE4() {
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease("E4", "8n");
      }
     function playF4() {
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease("F4", "8n");
      }
     function playGb4() {
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease("Gb4", "8n");
      }
     function playG4() {
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease("G4", "8n");
      }
     function playAb4() {
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease("Ab4", "8n");
      }
     function playA4() {
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease("A4", "8n");
      }
     function playBb4() {
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease("Bb4", "8n");
      }
     function playB4() {
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease("B4", "8n");
      }
     function playC5() {
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease("C5", "8n");
      }

console.log(notePlayed)

  return user ? (
    <div className="pianoPage" onKeyDown={playNote} tabIndex={1}>
    <h1>Piano</h1>
    <button>Start Playing</button>
    <div className="piano" onKeyDown={playNote} tabIndex={1}>
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
    </div>
  </div>
      ) : error && error["error"] ? <h2>{error["error"]}</h2> : null

  }

export default Piano