import React, { Component } from "react";
import Rainbow from "./hoc/Rainbow";
import axios from 'axios';

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            posts : []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response=>{
                // console.log(response.data);
                this.setState({
                    posts : response.data.splice(0, 10)
                })
            });
    }

    render() {
        // console.log(this.state.posts);
        const {posts} = this.state;
        const postList = posts.length?(
            posts.map((post)=>{
                return (
                    <div className="card mb-3" key={post.id}>
                        <div className="card-header">
                            Post number {post.id}
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{post.title}</h5>
                            <p className="card-text">{post.body}</p>
                            <a href="#" className="btn btn-primary">Details</a>
                        </div>
                    </div>
                )
            })
        ):(
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Empty!</strong> No post available there.
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>        );
        return(
            <div className="card">
                <div className="card-header">
                    All Posts
                </div>
                <div className="card-body">
                    {postList}
                </div>
            </div>
        )
    }
}

export default Rainbow(Home);