import React, {useState} from 'react';

function UseState() {
    let [count, setCount] = useState(0);
    const increment = () =>{
        setCount(count+1);
    }
    return (
        <div>
            <button onClick={increment}> Count</button>
            <span>{count}</span>
            <br />
        </div>
    )
}

export default UseState;