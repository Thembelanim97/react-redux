import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'

class Post extends Component {
    handleClick = () => {
        this.props.deletePost(this.props.post.id)
        this.props.history.push('/')
    }

    render(){
        const post = this.props.post;
        const showPost = post ? (
                    <div className="post" key={post.id}>
                        <h4 className='center'>{post.title}</h4>
                        <p className='center'>{post.body}</p>
                        <div className='center'>
                            <button className='btn red' onClick={this.handleClick}>DELETE POST</button>
                        </div>
                    </div>
    
            ) : (<div className='container center'>Waiting</div>)

        return(
            <div className='container'>
                {showPost}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id
    return {
        post: state.posts.find(post => post.id == id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost : (id) => {dispatch({type: 'DELETE_POST',id: id})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)