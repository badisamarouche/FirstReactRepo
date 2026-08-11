import React, { useRef, useState, useEffect } from 'react'
import staricon from './star.png'
import './Shoestore.css'

const ShoeSideBar = (props) => {
    const formRef=useRef(null)
    // const [categoriez,setcat]=useState([])
    // function handleForm(formData){
    //     setcat(formData.getAll("category"))
        
    // }
    // useEffect(()=>{
    //     props.filterfunc(categoriez)
    // },[categoriez])
function toggleColor(value){
let newcolorlist=(
      props.colorlist.includes(value)
        ? props.colorlist.filter((v) => v !== value)
        : [...props.colorlist, value]
    );
    props.filterColor(newcolorlist)
}

 function togglePrice(value) {
    let newpricelist=(
      props.pricelist.some(price=>value.min==price.min)
        ? props.pricelist.filter((v) => v.min !== value.min)
        : [...props.pricelist, value]
    );
    props.filterprice(newpricelist)
    
  }
    function toggleCategory(value) {
    let newcatglist=(
      props.categorilist.includes(value)
        ? props.categorilist.filter((v) => v !== value)
        : [...props.categorilist, value]
    );
    props.filterfunc(newcatglist)
    
  }
  return (
    <div className='ShoeSideBar'>
        <div className='icondiv'>
        <img src={staricon} alt="icon" />
        </div>
        <form ref={formRef} >
        <fieldset className='fieldset'>
    <h2>Category</h2>
    <hr />
{/* <label id='label' htmlFor="checkbox1"> 
<input defaultChecked type="checkbox" id="checkbox1" name="choice" value={"AllCategory"}  /> All
</label> */}

<label htmlFor="checkbox2"> 
<input onChange={()=>toggleCategory("sneakers")}  type="checkbox" id="checkbox2" name="category" value={"Sneakers"} checked={props.categorilist.includes("sneakers")} /> Sneakers
</label>
<label htmlFor="checkbox3">
<input onChange={()=>toggleCategory("flats")} type="checkbox" id="checkbox3" name="category" value={"Flats"} />  Flats 
</label>
<label htmlFor="checkbox4"> 
<input onChange={()=>toggleCategory("sandals")} type="checkbox" id="checkbox4" name="category" value={"Sandals"} />  Sandals   
</label>
<label htmlFor="checkbox5"> 
<input onChange={()=>toggleCategory("heels")} type="checkbox" id="checkbox5" name="category" value={"Heels"} />  Heels 
</label>
</fieldset>
<fieldset className='fieldset'>
    <h2>Price</h2>
    <hr />
    {/* <label htmlFor="checkbox6"> 
<input defaultChecked  type="checkbox" id="checkbox6" name="choice" value={"All Prices"} />  All
</label> */}
<label htmlFor="checkbox7">
<input onChange={()=>togglePrice({min:0,max:50})}  type="checkbox" id="checkbox7" name="Price" value={"0$-50$"} />  0$-50$ 
</label>
<label htmlFor="checkbox8"> 
<input onChange={()=>togglePrice({min:50,max:100})}  type="checkbox" id="checkbox8" name="Price" value={"50$-100$"} />  50$-100$
</label>
<label htmlFor="checkbox9">
<input onChange={()=>togglePrice({min:100,max:150})} type="checkbox" id="checkbox9" name="Price" value={"100$-150$"} />  100$-150$ 
</label>
<label htmlFor="checkbox10"> 
<input onChange={()=>togglePrice({min:150,max:9000})} type="checkbox" id="checkbox10" name="Price" value={"Over 150$"} /> Over 150$
</label>
</fieldset >

<fieldset className='fieldset'>
    <h2>Colors</h2>
    <hr />
{/* <label htmlFor="checkbox11"> 
<input defaultChecked type="checkbox" id="checkbox11" name="choice" value={"AllColor"} />  All
</label> */}
<label htmlFor="checkbox12">
<input onChange={()=>toggleColor("black")} type="checkbox" id="checkbox12" name="color" value={"Black"} />  Black 
</label>
<label htmlFor="checkbox13"> 
<input onChange={()=>toggleColor("blue")} type="checkbox" id="checkbox13" name="color" value={"Blue"} />  Blue
</label>
<label htmlFor="checkbox14">
<input onChange={()=>toggleColor("red")} type="checkbox" id="checkbox14" name="color" value={"Red"} />  Red 
</label>
<label htmlFor="checkbox15"> 
<input onChange={()=>toggleColor("green")}  type="checkbox" id="checkbox15" name="color" value={"Green"} />  Green
</label>
<label htmlFor="checkbox16">
<input onChange={()=>toggleColor("white")} type="checkbox" id="checkbox16" name="color" value={"White"} />  White 
</label>
</fieldset>
</form>
    </div>
  )
}

export default ShoeSideBar