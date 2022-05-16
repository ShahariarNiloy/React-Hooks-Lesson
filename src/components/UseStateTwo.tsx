import React, {useState} from 'react';

function UseStateTwo() {
    let initValue =0;
    const [count, setCount] = useState(initValue);
    return (
        <div>
            Count: {count}
            <button onClick={()=>setCount(initValue)}>Reset</button>
            <button onClick={()=>setCount((inc) => inc+1)}>increment</button>
            <button onClick={()=>setCount(dec => dec-1)}>decrement</button>
            <br />
        </div>
    );
}

export default UseStateTwo;