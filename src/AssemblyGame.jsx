import React, { useEffect, useState,useRef, use } from "react";
import Languages from "./languages";
import Keyboard from "./Keyboard";
import TheWord from "./TheWord";
import Portal from "./portal";
import {words} from 'popular-english-words';
import { getFarewellText } from "./farewell";
export default function AssemblyGame() {


  let langArr = [
    "Css",
    "HTML",
    "Javascript",
    "React",
    "Typescript",
    "Node.js",
    "Python",
    "Ruby",
    "Assembly",
  ];
  let [letterFound, setFoundLetters] = useState([]);
  let [count, setCount] = useState(0);
  const [keyStates, setKeyStates] = useState({});
  let Thewords=words.getMostPopular(10000);
  let theword = useRef(Thewords[Math.floor((Math.random())*10000)]);
  const uniqueArray = [...new Set(theword.current.toUpperCase())];
  let gameWon=uniqueArray.length == letterFound.length
  let gameLost=count>=8
  let [lastguesscorrect,setLastGuess]=useState(null);
  
console.log(lastguesscorrect)
  function handleKeyboard(letter) {
    // let letter=e.currentTarget.innerText
    if (theword.current.toUpperCase().includes(letter)) {
      setLastGuess(true);
      setKeyStates((prev) => ({
        ...prev,
        [letter]: "green",
      }));
      // e.currentTarget.style.background="#0e9720"
      // e.currentTarget.disabled=true;
      setFoundLetters((prevlet) => [...prevlet, letter]);
    } else {
      setLastGuess(false);
      setKeyStates((prev) => ({
        ...prev,
        [letter]: "red",
      }));
      // e.currentTarget.style.background="#c33d39"
      // e.currentTarget.disabled=true;
      setCount((prevcount) => prevcount + 1);
    }
    
  }

  function PlayAgain() {
    theword.current = Thewords[Math.floor((Math.random())*10000)];
    setFoundLetters([]);
    setCount(0);
    setKeyStates({});
    setLastGuess(null)
  }

  let farewell = langArr.slice(0, count);
  return (
    <div className="AssemblyContainer">
      <div className="options">
        

<select name="difficulty" id="difficulty" defaultValue=""  >
  <option value="" disabled>difficulty</option>
  <option  value="0-5">0-5</option>
  <option  value="5-10">5-10</option>
  <option value="10++">10++</option>
</select>
      </div>
      <h1 id="Assemblytitle">Assembly: Endgame</h1>
      <p id="Assemblyp">
        Guess the word in under 8 attempts to keep the programming world safe
        from Assembly!
      </p>

      <div
        className="Farewell"
        style={
          gameWon
            ? { backgroundColor: "green" }
            : gameLost
              ? { backgroundColor: "red" }
              : null
        }
      >
        {gameWon
          ? "You Won Well Done"
          : gameLost
            ? "Game Over! You'll have to learn Assembly"
            : count == 0
              ? "Save the languages"
              :(lastguesscorrect==false)? ` ${getFarewellText(langArr[count-1])}`
              :`Save the ${8-count} left languages`}
      </div>
      <div className="languages">
        <Languages mistakes={count} 
        langArr={langArr} />
      </div>
      <div className="theword">
        <TheWord word={theword.current.toUpperCase()} foundletter={letterFound} gameLost={gameLost} />
      </div>
      <div className="keyboard">
        <Keyboard
          class={keyStates}
          off={
            gameWon || gameLost
              ? true
              : false
          }
          handleKey={handleKeyboard}
        />
      </div>

      {(gameWon || gameLost )? (
        <button id="domdom" onClick={PlayAgain} className="PlayAgainBut">
          Play Again
        </button>
      ) : null}
      {!(gameWon || gameLost )? <Portal
      correct={lastguesscorrect}/>:null}
    </div>
    
  );
}
// Farewell to ${farewell.join(" & ")}