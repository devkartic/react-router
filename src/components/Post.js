import React, {Component} from "react";
import { connect } from 'react-redux'


class Post extends Component{

    clickHandler = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }

    render() {
        // console.log(this.props);

        let postDetails = this.props.post ? (
            <div className="card mb-3">
                <div className="card-header">
                        Post number {this.props.post.id}
                        <button onClick={this.clickHandler} className="float-right btn btn-outline-danger btn-sm">Delete</button>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{this.props.post.title}</h5>
                    <p className="card-text">{this.props.post.body}</p>
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

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost : (id) => { dispatch({type: 'DELETE_POST', id : id}) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Post);