import React, { Component } from 'react'
import './spotDetails.css'
import { connect } from 'react-redux'
import {
  addLike,
  removeLike,
  deletePost
} from './../../../../../redux_state/actions/spotActions'

class SpotDetails extends Component {
  componentDidMount() {
    console.log(this.props.auth.user.id)
    console.log(this.props.spot)
  }

  likeSkateSpot(id) {
    this.props.addLike(id)
  }

  unlikeSkateSpot(id) {
    this.props.removeLike(id)
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
          <div className="likes_container">
            <h3 className="likes_counter">{likes.length} likes</h3>
            {this.checkIfAlreadyLiked(likes) ? (
              <button
                onClick={this.unlikeSkateSpot.bind(this, _id)}
                className="likes_btn"
              >
                -
              </button>
            ) : (
              <button
                onClick={this.likeSkateSpot.bind(this, _id)}
                className="likes_btn"
              >
                +
              </button>
            )}
          </div>
        </div>
        <h1>{comments.length} comments</h1>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(
  mapStateToProps,
  { deletePost, addLike, removeLike }
)(SpotDetails)
