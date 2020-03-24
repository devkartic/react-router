import React, {Component} from "react";
import { connect } from 'react-redux'


class Post extends Component{

    state = {
        post : this.props.post
    }

    render() {
        // console.log(this.props.post);

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

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post : state.posts.find(post => post.id == id)
    }
}

export default connect(mapStateToProps) (Post);