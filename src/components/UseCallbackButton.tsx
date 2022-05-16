import React, { Children } from 'react';

function UseCallbackButton({handleClick,children}:{handleClick:any, children:any }) {
    console.log("button")
    return (
        <div>
            <button onClick = {handleClick}>{children}</button>
        </div>
    );
}

export default React.memo(UseCallbackButton);