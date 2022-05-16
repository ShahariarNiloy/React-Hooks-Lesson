import React, {useState, useEffect} from 'react';

function useCustomCounter() {
    
    const [counterOne, setCounterOne] = useState<any>(10);
    const [counterTwo, setCounterTwo] = useState<any>(10);

    
        const setChange = ()=>{
            setCounterTwo(counterOne*2)
            setCounterOne((prev:any) => prev+1)
            
        }
    
    
    
    return [counterOne, counterTwo, setChange];
}

export default useCustomCounter;