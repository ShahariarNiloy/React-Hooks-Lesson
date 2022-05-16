import React from 'react';

function UseCallbackCount({text,count}:{text:any, count:any }) {
    console.log(`Rendering count`)
    return (
        <div>
            {text}  -  {count}

        </div>
    );
}

export default React.memo(UseCallbackCount);