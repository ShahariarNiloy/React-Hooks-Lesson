import React from 'react';
import StateAndProps from './StateAndProps';
import Nav from './nav';
import Post from './Post';
import "./PracticeApp.css"

function PracticeApp() {
    const name = "Niloy"
    return (
        <div>
            <div className="home">
                <Nav/>
                <Post me={name}/>
            </div>
        </div>
    );
}

export default PracticeApp;