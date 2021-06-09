import React from 'react';
import {NavLink} from 'react-router-dom';


const Nav = () => {

    return(
        <nav className="main-nav">
            <ul>
                <li><NavLink to="#">UFO</NavLink></li>
                <li><NavLink to="#">SPACE</NavLink></li>
                <li><NavLink to="#">STARS</NavLink></li>
            </ul>
        </nav>


    );
}

export default Nav;