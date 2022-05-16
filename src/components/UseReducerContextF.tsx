import React, {useContext} from 'react';
import {CountContext} from './UseReducerContext'
function UseReducerContextF() {
    const countContext = useContext<any>(CountContext)
    return (
        <div>
            Component - F
            <button onClick ={()=> countContext.countDispatch('inc')}>Increment</button>            
            <button onClick ={()=> countContext.countDispatch('dec')}>Deccrement</button>
            <button onClick ={()=> countContext.countDispatch('reset')}>Reset</button>        
        </div>
    );
}

export default UseReducerContextF;