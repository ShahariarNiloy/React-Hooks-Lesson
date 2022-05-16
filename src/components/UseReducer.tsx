import React, {useReducer} from 'react';


const initialState = 0
const reducer = (state : any,action : any)=>{
    if(action === 'increment'){
        return state +1
    }else if(action === 'decrement'){
        return state -1
    }else if(action === 'reset'){
        return initialState
    }else{
        return state
    }
}
function UseReducer() {
    const [count,dispatch] = useReducer(reducer,initialState)
    return (
        <div>
            Value- {count}<br/>
            <button onClick={()=> dispatch('increment')}>Increment</button>
            <button onClick={()=> dispatch('decrement')}>Decrement</button>
            <button onClick={()=> dispatch('reset')}>Reset</button>
        </div>
    );
}

export default UseReducer;