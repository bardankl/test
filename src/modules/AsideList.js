import React, {Component} from 'react';
import './AsideList.css';
import axios from 'axios';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";


class AsideList extends Component {
    constructor() {
        super();
        this.state = {
            endPoint: 'http://jsonplaceholder.typicode.com/posts',
            posts: [],
        }
    }

    componentDidMount() {
        this.getPosts()
    }

    getPosts = () => {
        axios.get(this.state.endPoint)
            .then(res => {
                this.setState({posts: res.data})
            })
    };


    render() {
        return (
            <aside className='asideList'>
                <ul>
                {this.state.posts.map(el => {
                    return <li key={el.id}>
                        <Link to={`/post/${el.id}`}><h1>{el.id}. {el.title}</h1></Link>
                        <p>{el.body}</p>
                    </li>
                })}
                </ul>
            </aside>
        )
    }

}

export default AsideList;
