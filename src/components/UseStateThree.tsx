import React, {useState} from 'react';

function UseStateThree() {
    let info = {firstName: '', lastName: ''};
    const [name, setName] = useState(info);
    return (
        <div>
            <input type="text" value={name.firstName} onChange={ (e)=> setName({...name, firstName: e.target.value })}/>
            <input type="text" value={name.lastName} onChange={ (e)=> setName({...name, lastName: e.target.value })}/>

            <br/>
            First Name is : {name.firstName} <br />
            Last Name is : {name.lastName}
            <br />

        </div>
    );
}

export default UseStateThree;