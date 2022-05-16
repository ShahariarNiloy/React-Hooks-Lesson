import React, {useReducer} from 'react';

const initialState = {
    firstCounter: 0,
    secondCounter: 10
}
const reducer = (state : any,action : any)=>{
    if(action.type === 'increment1'){
        return {...state, firstCounter: state.firstCounter + action.value}
    }else if(action.type === 'decrement1'){
        return {...state, firstCounter: state.firstCounter - action.value}
    }else if(action.type === 'increment2'){
        return {...state, secondCounter: state.secondCounter + action.value}
    }else if(action.type === 'decrement2'){
        return {...state, secondCounter: state.secondCounter - action.value}
    }
    else if(action.type === 'reset'){
        return initialState
    }else{
        return state
    }
}

function UseReducerTwo() {
    const [count,dispatch] = useReducer(reducer,initialState)
    return (
        <div>
            First Counter- {count.firstCounter}<br/>
            Second Counter- {count.secondCounter}<br/>
            <button onClick={()=> dispatch({type: 'increment1', value: 2})}>Increment Counter 1</button>
            <button onClick={()=> dispatch({type: 'decrement1', value: 2})}>Decrement Counter 1</button><br />
            <button onClick={()=> dispatch({type: 'increment2', value: 3})}>Increment Counter 1</button>
            <button onClick={()=> dispatch({type: 'decrement2', value: 3})}>Decrement Counter 1</button><br />
            <button onClick={()=> dispatch({type: 'reset'})}>Reset</button>
        </div>
    );
}

export default UseReducerTwo;