import React, {Component} from 'react';
import {Link} from 'react-router';

const Menu = (props) => {
    return(
        <nav>
            <Link to="/" activeClassName="selected">Home</Link>
            <Link to="/app" activeClassName="selected">App</Link>
            <Link to="/about" activeClassName="selected">About</Link>
        </nav>
    )
}

export default Menu;
