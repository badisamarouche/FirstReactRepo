import React from "react"

export const reducer= (state,action)=>{
    switch (action.type) {
        case 'increment':
            return{...state, count:state.count+action.diff}
            
        case 'decrement':
            return{...state, count:state.count-action.diff}

        case 'reset':
            return{...state, count:0}
        case 'incrementby5':
        return{...state,count:state.count+5}
        case 'decrement by 5':
        return{...state,count:state.count-5}

        default:return{state}
            break;
    }
}