import React from 'react';

function UseCallbackTitle() {
    console.log('title')
    return (
        <div>
            <h6>
                useCallback title
            </h6>
        </div>
    );
}

export default React.memo(UseCallbackTitle);