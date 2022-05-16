import React, {useState, useEffect} from 'react';

function UseEffectTwo() {
    const [positionX,setPositionX] = useState(0);
    const [positionY,setPositionY] = useState(0);
    
    const logMouseMove = (e:any)=>{
        setPositionX(e.clientX)
        setPositionY(e.clientY)
        console.log('logMouseCall')
    }
    useEffect(()=>{
        console.log("mouse");
        window.addEventListener('mousemove',logMouseMove)

        return ()=>{
            console.log("removed");
        window.removeEventListener('mousemove',logMouseMove)
        }
    },[])
    return (
        <div>
            
            X-cordinate: {positionX}<br/>Y-cordinate: {positionY}
            
        </div>
    );
}

export default UseEffectTwo;