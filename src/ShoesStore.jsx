import React, { useEffect, useState } from 'react'
import ShoeSideBar from './ShoeSideBar'
import ShoeNavBar from './ShoeNavBar'
import data from './shoesData'
import ShoeCard from './ShoeCard'
const ShoesStore = () => {

    // const brands=["All","Nike","Adidas","Puma","Vans"]
    // let brandsbuttonlist=brands.map(brand=>(<button onClick={()=>{Searchfunc(brand)}} id={(searchinput==brand)?'clicked':'brandbut'}>{brand}</button>))

    const [Showndata,setShown]=useState(data)
    const [categorilist,setcatglist]=useState([])
    const [pricelist,setPricelist]=useState([])
    const[colorlist,setColorlist]=useState([])
    const [searchinput,setSearchinput]=useState('All')
       const brands=["All","Nike","Adidas","Puma","Vans"]
    let brandsbuttonlist=brands.map(brand=>(<button onClick={()=>{Searchfunc(brand)}} id={(searchinput==brand)?'clicked':'brandbut'}>{brand}</button>))
let filteredData=data;
console.log(colorlist)
    const Searching = useEffect(()=>{
        if(searchinput=='All'){
            if(categorilist.length){
                 filteredData=filteredData.filter(shoe=>categorilist.includes(shoe.category.toLowerCase()))                      
            }
            if(pricelist.length){
                let pricedData=[]
                for (let i=0; i < pricelist.length; i++){
                    pricedData=pricedData.concat(filteredData.filter(shoe=>pricelist[i].min < shoe.newPrice && shoe.newPrice <= pricelist[i].max))
                }
                filteredData=pricedData;
            }
            if(colorlist.length){
                console.log(colorlist)
                 filteredData=filteredData.filter(shoe=>colorlist.includes(shoe.color.toLowerCase()))                      
            }
            setShown(filteredData)
          }
    else{
        let searchedData= data.filter(shoe=>shoe.title.toLowerCase().includes(searchinput.toLowerCase())||shoe.company.toLowerCase().includes(searchinput.toLowerCase()))
        if (categorilist.length){
        searchedData=searchedData.filter(shoe=>categorilist.includes(shoe.category.toLowerCase()))}
        if(pricelist.length){
                let pricedData=[]
                for (let i=0; i < pricelist.length; i++){
                    pricedData=pricedData.concat(searchedData.filter(shoe=>pricelist[i].min < shoe.newPrice && shoe.newPrice <= pricelist[i].max))
                }
                searchedData=pricedData;
            }
            if(colorlist.length){
                console.log(colorlist)
                 searchedData=searchedData.filter(shoe=>colorlist.includes(shoe.color.toLowerCase()))                      
            }
        setShown(searchedData)

        }
    },[searchinput,categorilist,pricelist,colorlist])
    function Searchfunc(Searchinp){
        setSearchinput(Searchinp)
    //     if(Searchinp=='All'){
    //         // setShown(data)
    //          if(categorilist.length){
    //         setShown(data.filter(shoe=>categorilist.includes(shoe.category.toLowerCase())))
    //     }
    //     else{setShown(data)}
    //     }
    //     else {
    //     let searchedData= data.filter(shoe=>shoe.title.toLowerCase().includes(Searchinp.toLowerCase())||shoe.company.toLowerCase().includes(Searchinp.toLowerCase()))
    //     setSearchinput(Searchinp)
    //     if(categorilist.length){
    //         searchedData=searchedData.filter(shoe=>categorilist.includes(shoe.category.toLowerCase()))
    //     }
    //     setShown(searchedData)
    // console.log(Showndata)}
    }

    function filter(filterarray){
        setcatglist(filterarray)
        // if(filterarray.length){
        // let filteredData=data.filter(shoe=>filterarray.includes(shoe.category.toLowerCase()))
        // if((searchinput!="")&&(searchinput!="All")){
        // filteredData=filteredData.filter(shoe=>shoe.title.toLowerCase().includes(searchinput.toLowerCase())||shoe.company.toLowerCase().includes(searchinput.toLowerCase()))
        // }
        // setShown(filteredData)
        // }
        // else{
            
        //     Searchfunc(searchinput)
        // }
    }
    function filterprice(filteredprices){
        setPricelist(filteredprices)
    }
    function filterColor(filteredcolors){
        setColorlist(filteredcolors)
    }
    let shoecardlist=Showndata.map
    ((shoe,index)=>
    <ShoeCard shoedata={Showndata}  shoeindex={index}/>)
 
    return (
    <div className='mainStore'>
        <ShoeSideBar
        colorlist={colorlist}
        filterColor={filterColor}
        pricelist={pricelist}
        filterprice={filterprice}
        categorilist={categorilist}
        filterfunc={filter}/>
        <div className='navandmain'>
            <ShoeNavBar
            searchfunc={Searchfunc}/>
            <div id='brandsbutton'>
            <h1>Recommended</h1>
            {brandsbuttonlist}
            <div className='ShoeList'>
            {shoecardlist}
            </div>
            </div>

        </div>
    </div>
  )
}

export default ShoesStore