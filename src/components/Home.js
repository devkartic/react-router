import React, { Component } from "react";
import Rainbow from "./hoc/Rainbow";
import axios from 'axios'
import {Link} from "react-router-dom";
import Pokeball from './../images/pokeball.png'
import { connect } from 'react-redux'

class Home extends Component{
    state = {
        posts : this.props.posts
    }

/*    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response=>{
                // console.log(response.data);
                this.setState({
                    posts : response.data.splice(0, 10)
                })
            });
    }*/

    render() {
        // console.log(this.state.posts);
        const {posts} = this.state;
        const postList = posts.length?(
            posts.map((post)=>{
                return (
                    <div className="card mb-3 home" key={post.id}>
                        <div className="card-header">
                            <Link to={`/${post.id}`}>
                                Post number {post.id}
                            </Link>
                        </div>
                        <div className="card-body">
                            <img src={Pokeball}/>
                            <h5 className="card-title">{post.title}</h5>
                            <p className="card-text">{post.body}</p>
                            <Link to={`/${post.id}`}>
                                Post details
                            </Link>
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

const mapStateToProps = (state) => {
    return {
        posts : state.posts
    }
}

export default connect(mapStateToProps) (Home);