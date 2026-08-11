import { useEffect, useRef, useState } from 'react'
import React from 'react'
import './App.css'
import DieCmp from './DieCmp'
import Confetti from 'react-confetti'
import {useWindowSize} from 'react-use'
import AppFromScratch from './AppFromScratch'
import AssemblyGame from './AssemblyGame'
import UserProfile from './UserProfile'
import {UserProvider} from'./UserContext';
import UpdateUser from './UpdateUser'
import Context from './Context'
import Reducer from './Reducer'
import TodoList from './TodoList'
import Meals from './Meals'
import Testimonials from './Testimonials'
import ShoesStore from './ShoesStore'
function App() {

  return(
    <div className='0'>
      <ShoesStore/>
  
     {/* <UserProvider>
      <UserProfile/>
     </UserProvider> */}
      {/* <AssemblyGame/> */}
      
      {/* <AppFromScratch/> */}
      
    </div>
    
  )

  
}

export default App
