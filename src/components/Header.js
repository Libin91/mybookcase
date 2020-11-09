import React from 'react';
import {NavLink} from 'react-router-dom';


const Header = () => {
    return (
    <div>
        <h1>My Bookcase</h1>
        <ul className="main-nav">
        <li><NavLink exact to = "/">Home</NavLink></li>
        <li><NavLink to = "/bookcase" className="bookLink">Bookcase</NavLink></li>
        <li><NavLink to = "/pages/About" className="aboutPage">About</NavLink></li>
        </ul>

    </div>
    ); 

}

export default Header;