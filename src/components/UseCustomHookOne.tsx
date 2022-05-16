import React, {useState} from 'react';
import useCustomCounter from './useCustomCounter';

function UseCustomHookOne() {
    const [counterOne, counterTwo, setChanges] = useCustomCounter()
    return (
        <div>
            Normal Counter: {counterOne}
            <button onClick={setChanges}>Click</button>
            Multiply Counter: {counterTwo}
        </div>
    );
}

export default UseCustomHookOne;