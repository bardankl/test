import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

const Menu = ()=> {
return (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to={`/1`}>1</Link>
                    <Link to={`/2`}>2</Link>
                    <Link to={`/3`}>3</Link>
                    <Link to={`/4`}>4</Link>
                </li>
            </ul>
        </nav>
    </div>
)

};

export  default Menu;
