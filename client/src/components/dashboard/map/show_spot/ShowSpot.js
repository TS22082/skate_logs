import React, { Component } from 'react'
import './showSpot.css'
import { connect } from 'react-redux'
import { getPost } from './../../../../redux_state/actions/spotActions'

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
      console.log(this.props.skateSpots.post)

      const name = this.props.skateSpots.post.name
      console.log(name)

      return <h1>{name}</h1>
    }
  }

  render() {
    return (
      <div>
        <h1>Post works</h1>
        {this.showSpot()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  skateSpots: state.skateSpots
})

export default connect(
  mapStateToProps,
  { getPost }
)(ShowSpot)
