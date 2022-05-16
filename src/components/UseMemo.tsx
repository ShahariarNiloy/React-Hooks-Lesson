import React, {useState, useMemo} from 'react';

function UseMemo() {

    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = ()=>{
        setCounterOne(counterOne+1)
    }

    const incrementTwo = ()=>{
        setCounterTwo(counterTwo +1)
    }
    const isEven = useMemo(()=>{
        for(let i=0;i<20000;i++){
           
        }
        return (counterOne%2 === 0)
        

    },[counterOne])

    return (
        <div>
            <div>
                <button onClick={incrementOne}>Count One -  {counterOne}</button>
                <span>{isEven ? 'Even' : 'Odd'}</span>
            </div>
            <div>
                <button onClick={incrementTwo}>Count Two -  {counterTwo}</button>
            </div>
        </div>
    );
}

export default UseMemo;