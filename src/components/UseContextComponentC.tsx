import React, {useContext} from 'react';
import {userName, userCompany} from '../App'

function UseContextComponentC() {
    const name = useContext<any>(userName)
    const company = useContext<any>(userCompany)
    return (
        <div>
            {name} -- {company}
        </div>
    );
}

export default UseContextComponentC;