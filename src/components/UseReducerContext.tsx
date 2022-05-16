import React, {useReducer, createContext} from 'react';
import UseReducerContextA from './UseReducerContextA';
import UseReducerContextB from './UseReducerContextB';
import UseReducerContextC from './UseReducerContextC';


export const CountContext = createContext<any>(0)
const initialState = 0;
const reducer = (state:any,action:any)=>{
    if(action === 'inc'){
        return state+1;
    }else if(action === 'dec'){
        return state-1;
    }else if(action === 'reset'){
        return initialState;
    }else{
        return state;
    }
}

function UseReducerContext() {
    
    const [values, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <CountContext.Provider value={{countState: values, countDispatch : dispatch}} >
                Value - {values}
                
                <UseReducerContextA/>
                <UseReducerContextB/>
                <UseReducerContextC/>
            </CountContext.Provider>
        </div>
    );
}

export default UseReducerContext;