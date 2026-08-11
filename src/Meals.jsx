import React, { useEffect, useState } from 'react'
import axios from 'axios'
import FoodCard from './FoodCard'
const Meals = () => {

    const [themeals,setMeals]=useState([])
    let meals=[]
    useEffect(()=>{
        
        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        .then((res)=>setMeals(res.data.meals)) 
        
        // .then((res)=>data=res.json())
        
        

    },[])

let mealsList=themeals.map((meal,index)=>
//     (<div className='mealCard'>
//         <img src={meal.strMealThumb} alt="" />
//     <h1>{meal.strMeal} </h1>
//     <h2>{meal.strCountry} {index}</h2>
//     </div>     
// )
<FoodCard 
    card={meal}/> 
)
  return (
    <div className='mealslist'>
        
 {mealsList}
    </div>
  )
}

export default Meals