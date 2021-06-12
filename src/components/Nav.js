import React from 'react';
import {NavLink} from 'react-router-dom';

// desplays three links in home page. clicking the link will search the item.
const Nav = (props) => {
    
    return(
        <nav className="main-nav">
            <ul>
                <li><NavLink to="/search/cars">Cars</NavLink></li>
                <li><NavLink to="/search/birds">Birds</NavLink></li>
                <li><NavLink to="/search/computers">Computers</NavLink></li>
            </ul>
        </nav>


    );
}

export default Nav;