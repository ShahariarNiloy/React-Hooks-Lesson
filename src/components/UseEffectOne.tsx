import React, {useEffect, useState} from 'react';

function UseEffectOne() {
    const [click, setClick] = useState(0);
    const [name, setName] = useState('');
    useEffect(()=>{
        document.title = `${click} click`;
        console.log('rendered');
    },[click])
    return (
        <div>
            <input type='text' value ={name} onChange={(e) => setName(e.target.value)}></input>
            <button onClick={()=>setClick(click +1)}>You've click {click} times</button>
        </div>
    );
}

export default UseEffectOne;