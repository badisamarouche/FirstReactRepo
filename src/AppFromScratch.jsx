import React, { useEffect, useRef, useState } from "react";
import ButtonFromScratch from "./ButtonFromScratch";
import Confetti from 'react-confetti'
import './App.css'
import {useWindowSize} from 'react-use'

export default function AppFromScratch(){

   const { width, height } = useWindowSize()
   
    const [count,setCount]=useState(0)
    const [NumbersArr,setNumbersArr]=useState(CreateDice())
    function CreateDice(){
        let Array=[]
        for (let i=0; i<10;i++){
            Array[i]={
                value: Math.ceil((Math.random())*6),
                Clicked:false,
                key:i,
            }}
        return Array  }

        
        let gamewon=NumbersArr.every(arr=>arr.Clicked==true)
 let playAgainRef=useRef(null)

    useEffect(()=>{
        gamewon?playAgainRef.current.focus():null
    },[gamewon])
        const buttonEls=NumbersArr.map(obj=>
            <ButtonFromScratch
            onClick={Clicking}
            value={obj.value}
            Clicked={obj.Clicked}
            id ={obj.key}
            key={obj.key}
            />
        )
        let refNum=useRef(0);
        function Clicking(e){
            if(refNum.current===0){
                refNum.current=e.currentTarget.innerText
            }
            if(e.currentTarget.innerText===refNum.current){
                let ident=e.currentTarget.id
                console.log(ident)
                setNumbersArr((prevArr)=>prevArr.map(arr=>{return(
                      (arr.key==ident)?{...arr,
                       Clicked:true,
                     }:arr)}))
                
                // e.currentTarget.className="ClickedButton"
                // e.currentTarget.disabled="true"
            }
        }

        function Roll(){
            
            setNumbersArr(prevarr=>prevarr.map(arr=>{return(
                (arr.Clicked)?arr:
                {...arr, value:Math.ceil((Math.random())*6)}
            )}))
            setCount(prevcount=>prevcount+1)
        }
        function playAgain(){
            setNumbersArr(CreateDice())
            refNum.current=0;
            setCount(0)

        }
console.log(count)
    return(
        <>
        <div className='maincontainer'>
            <div className='cont'>
                <h1 id='title'>Tenzies </h1>         
                <p id='gameInstr'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
</p>  
<div className='dice'>
{buttonEls}
</div>

<button onClick={(gamewon)?playAgain:Roll} ref={playAgainRef}  id='Roll'>{(gamewon)?"Play Again":"Roll"}</button>

{(gamewon)?
<>
<button id="Roll">You Won in {count} Rolls</button>
<Confetti 
width={650}
      height={height}/>
</>
:null}
            </div>
        </div>
        </>
    )
}