import React, {useContext} from 'react';

import {CountContext} from './UseReducerContext'
function UseReducerContextD() {
    const countContext = useContext<any>(CountContext)
    return (
        <div>
            Componenet - D
            <button onClick={()=>countContext.countDispatch('inc')}>Increment</button>
            <button onClick={()=>countContext.countDispatch('dec')}>Decrement</button>
            <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>
            
        </div>
    );
}

export default UseReducerContextD;