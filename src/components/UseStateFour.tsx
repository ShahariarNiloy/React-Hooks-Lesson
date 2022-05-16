import { randomInt } from 'crypto';
import React, {useState} from 'react';
import { idText } from 'typescript';


function UseStateFour(props:any) {
    const {number} = props.number
    const Add  = ()=>{
        props.setNumber([...number, {
            id: props.numbers.length,
            value : Math.floor(Math.random()*10)+1
        }])
    }
    return (
        <div>
            <button onClick={Add}>Add New Number</button>
            <ul>
                {props.numbers.map((abc: any) => (
                <li key={abc.id}>{abc.value}</li>
                ))}
                
            </ul>
        </div>
    );
}

export default UseStateFour;