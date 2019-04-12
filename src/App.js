import React, {Component} from 'react';
import Post from './modules/Post'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import './App.css';

class App extends Component {
    constructor () {
        super();
        this.state = {
            id:[1,2,3,4]
        }
    }
    render() {
        return (
            <div className="App">
                <ul>
                    <li>
                        <Link to={`/${this.state.id[0]}`}>{this.state.id[0]}</Link>
                        <Link to={`/${this.state.id[1]}`}>{this.state.id[1]}</Link>
                        <Link to={`/${this.state.id[2]}`}>{this.state.id[2]}</Link>
                        <Link to={`/${this.state.id[3]}`}>{this.state.id[3]}</Link>
                    </li>
                </ul>
                <Route path={'/:id'} component={Post}/>
            </div>
        );
    }
}

export default App;
