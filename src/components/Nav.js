import React from 'react';
import {NavLink} from 'react-router-dom';


const Nav = () => {

    return(
        <nav className="main-nav">
            <ul>
                <li><NavLink to="#">Birds</NavLink></li>
                <li><NavLink to="#">Forrest</NavLink></li>
                <li><NavLink to="#">Mountain</NavLink></li>
            </ul>
        </nav>


    );
}

export default Nav;