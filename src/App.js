import React, {Component} from 'react';
import Post from './modules/Post'
import Menu from './modules/Menu'
import Home from './modules/Home'
import Contacts from './modules/Contacts'
import About from './modules/About'
import Segments from './modules/Segments'
import AsideList from './modules/AsideList';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

import './App.css';

class App extends Component {
    constructor () {
        super();
    }

    render() {
        return (
            <div className="App">
                <Menu/>
                <AsideList/>
                <Switch>

                    <Route path={'/home'}  component={Home}/>
                    <Route path={'/contacts'}  component={Contacts}/>
                    <Route path={'/about'}  component={About}/>
                    <Route path={'/Segments'}  component={Segments}/>
                    <Route path={'/post/:id'}  component={Post}/>
                    <Route path={'/post'}  component={Menu}/>
                </Switch>
            </div>
        );
    }
}

export default App;
