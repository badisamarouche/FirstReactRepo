import React from 'react'
import data from './shoesData'
import starel from "./star.png"


const ShoeCard = (props) => {
  return (
    <div className='ShoeCard'>
        {/* <h2>{props.shoedata[props.shoeindex].company}</h2>
        <h2>{props.shoedata[props.shoeindex].category}</h2> */}
        <img src={props.shoedata[props.shoeindex].img} alt="ShoeImage" />
        <h3>{props.shoedata[props.shoeindex].title}</h3>
        <div>
        <img id='starimg' src={starel} alt="aaa" /> <span>{props.shoedata[props.shoeindex].reviews}</span>
        </div>
        <div>
<span id='oldprice'>{props.shoedata[props.shoeindex].prevPrice}</span > <span id='newprice'> ${props.shoedata[props.shoeindex].newPrice} </span><span><img id='starimg' src={starel} alt="" /></span>
        </div>
        
        </div>
  )
}

export default ShoeCard