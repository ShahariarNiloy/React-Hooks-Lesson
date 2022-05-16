import React, {useState, useEffect} from 'react';
import UseEffectTwo from './UseEffectTwo';

function UseEffectTwoExtend() {
    const [display, setDisplay] = useState(true);
    return (
        <div>
            <button onClick={()=> setDisplay(!display)}>Toggle Dispaly</button>
            <br />
            {display && <UseEffectTwo/>}
        </div>
    );
}

export default UseEffectTwoExtend;