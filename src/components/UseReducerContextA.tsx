import React, {useContext} from 'react';
import {CountContext} from './UseReducerContext'
function UseReducerContextA() {
    const countContext = useContext<any>(CountContext)
    return (
        <div>
            Componenet -A
            <button onClick={()=>countContext.countDispatch('inc')}>Increment</button>
            <button onClick={()=>countContext.countDispatch('dec')}>Decrement</button>
            <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>
            
        </div>
    );
}

export default UseReducerContextA;