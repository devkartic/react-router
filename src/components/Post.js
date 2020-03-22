import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

class Post extends Component{

    state = {
        post : null
    }

    componentDidMount() {
        // console.log(this.props);
        let id = this.props.match.params.post_id
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response=>{
                console.log(response.data);
                this.setState({
                    post : response.data
                })
            });
    }

    render() {

        let postDetails = this.state.post ? (
            <div className="card mb-3">
                <div className="card-header">
                        Post number {this.state.post.id}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{this.state.post.title}</h5>
                    <p className="card-text">{this.state.post.body}</p>
                    <a href="#" className="btn btn-primary">Details</a>
                </div>
            </div>
        ):(
            <button className="btn btn-primary" type="button" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
            </button>
        );

        return(
            <div>
                { postDetails }
            </div>
        );
    }
}

export default Post;