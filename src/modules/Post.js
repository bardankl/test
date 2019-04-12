import React, {Component} from 'react';
import axios from "axios";

class Post extends Component {
    constructor(...props) {
        super(...props);
        this.state = {
            endPoint: 'http://jsonplaceholder.typicode.com/posts/',
            post: '',
            id: ''
        };

    }

    static getDerivedStateFromProps(props, state) {

        if (props.match.params.id !== state.id) {
            return {id: props.match.params.id}
        }
    };

    componentDidMount() {
        this.getPost()
    };
    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.getPost()
        }
    }


    getPost = () => {
        axios.get(`${this.state.endPoint}${this.state.id}`)
            .then(res => {
                this.setState({post: res.data})
            })
    };

    render() {
        return (
            <div>
                <h1>{this.state.post.title}</h1>

            </div>
        )
    }
}

export default Post;
