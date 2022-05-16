import React from 'react';

function Post(props : any) {
    return (
        <div>
            <h1>Post by {props.me}</h1>
        </div>
    );
}

export default Post;