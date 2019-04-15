import React from 'react';
import {Link} from "react-router-dom";
import Home from './Home'
import './Menu.css';

const Menu = ()=> {
return (
    <div className='menu'>
        <nav>
            <ul>
                <li><Link to={`/home`}>home</Link></li>
                <li><Link to={`/contacts`}>contacts</Link></li>
                <li><Link to={`/about`}>about</Link></li>
                <li><Link to={`/segments`}>segments</Link></li>
            </ul>
        </nav>
    </div>
)

};

export  default Menu;
