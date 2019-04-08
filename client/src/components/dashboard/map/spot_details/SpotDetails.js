import React, { Component } from 'react'
import './spotDetails.css'
import { connect } from 'react-redux'
import {
  addLike,
  removeLike,
  deletePost,
  addComment
} from '../../../../redux_state/actions/spotActions'
import like from './like.png'

class SpotDetails extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
    console.log(this.state)
  }

  onSubmit(e) {
    e.preventDefault()
    const { user } = this.props.auth

    const newComment = {
      text: this.state.text,
      name: user.name,
      avatar: user.avatar
    }

    this.props.addComment(this.props.skateSpots.post._id, newComment)
    this.setState({ text: '' })
  }

  likeSkateSpot(id) {
    this.props.addLike(id)
  }

  unlikeSkateSpot(id) {
    this.props.removeLike(id)
  }

  deleteSkateSpot(id) {
    this.props.deletPost(id)
  }

  checkIfAlreadyLiked(likes) {
    const { auth } = this.props
    if (likes.filter(like => like.user === auth.user.id).length > 0) {
      return true
    } else {
      return false
    }
  }

  render() {
    const { name, street, zip, likes, comments, _id } = this.props.spot
    return (
      <div className="spot_details">
        <div className="details_header">
          <h1>{name}</h1>
          <h1>
            {street}, {zip}
          </h1>
          <h3 className="likes_counter">{likes.length} likes</h3>
          {this.checkIfAlreadyLiked(likes) ? (
            <img
              src={like}
              alt=""
              className="unlike_btn"
              onClick={this.unlikeSkateSpot.bind(this, _id)}
            />
          ) : (
            <img
              src={like}
              alt=""
              className="like_btn"
              onClick={this.likeSkateSpot.bind(this, _id)}
            />
          )}
        </div>
        <h1 style={{ textAlign: 'center' }}>
          {comments.length} comments on this skate spot
        </h1>
        <form onSubmit={this.onSubmit} className="add_comment_form">
          <input
            type="text"
            name="text"
            className="comment_text_input"
            onChange={this.onChange}
            required
          />
          <input type="submit" value="ADD" className="new_comment_btn" />
        </form>
        {this.props.skateSpots.post.comments.map((comment, index) => (
          <div key={comment._id} className="comment_container">
            <p className="submitted_comment">{comment.text}</p>
            <button className="delete_comment_btn">DELETE</button>
            {index !== this.props.skateSpots.post.comments.length - 1 ? (
              <hr className="comment_break" />
            ) : null}
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  skateSpots: state.skateSpots
})

export default connect(
  mapStateToProps,
  { deletePost, addLike, removeLike, addComment }
)(SpotDetails)
