import React from "react";
import icon from './star.png'

export default function ShoeNavBar(props){


    return(
        <div className="Shoenavbar">
        <input onChange={(e)=>props.searchfunc(e.target.value)}  placeholder=" Enter Your Shoe Name" type="text" name="Shoename" id="Shoename" />
        <div className="navbaricons"> 
            <img src={icon} alt="fav" />
            <img src={icon} alt="cart" />
            <img src={icon} alt="acnt" />
        </div>
        </div>
    )
}