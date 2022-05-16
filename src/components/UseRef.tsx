import React, {useRef} from 'react';
let check = 0 ;
function UseRef() {
    let initialRef = useRef<any>()
    
    const change = ()=>{
        initialRef.current.focus();
        initialRef.current.value = 1234
        if(check%2===0){
            initialRef.current.style.display = 'none'
            
        }else{
            initialRef.current.style.display = 'inline'
        }
        check++;
    }
    return (
        <div>
            <input type="text"  ref={initialRef}/>
            <button onClick={change}>Click to change</button>
        </div>
    );
}

export default UseRef;