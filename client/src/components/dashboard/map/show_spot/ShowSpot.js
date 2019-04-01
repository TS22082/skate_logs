import React, { Component } from 'react'
import './showSpot.css'
import { connect } from 'react-redux'
import { getPost } from './../../../../redux_state/actions/spotActions'
import SpotDetails from './spot_details/SpotDetails'

class ShowSpot extends Component {
  constructor() {
    super()
    this.state = {}
    this.showSpot = this.showSpot.bind(this)
  }
  componentDidMount() {
    this.props.getPost(this.props.match.params.id)
  }

  showSpot() {
    if (!this.props.skateSpots.post) {
      return <h1>Loading</h1>
    } else {
      // const { name, street, zip, likes, comments } = this.props.skateSpots.post
      return (
        <SpotDetails spot={this.props.skateSpots.post} />
        // <div>
        //   <h1>{name}</h1>
        //   <h1>
        //     {street}, {zip}
        //   </h1>
        //   <h1>{likes.length} likes</h1>
        //   <h1>{comments.length} comments</h1>
        // </div>
      )
    }
  }

  render() {
    return <div>{this.showSpot()}</div>
  }
}

const mapStateToProps = state => ({
  skateSpots: state.skateSpots
})

export default connect(
  mapStateToProps,
  { getPost }
)(ShowSpot)
