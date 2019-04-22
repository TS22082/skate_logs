import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPicture } from './../../../../../redux_state/actions/spotActions'
import './spot_pics.css'

class SpotPics extends Component {
  constructor() {
    super()
    this.state = {
      selectedFile: null
    }
    this.fileUploadHandler = this.fileUploadHandler.bind(this)
  }

  componentDidMount() {}

  fileSelectorHandler = event => {
    this.setState({ selectedFile: event.target.files[0] })
  }

  fileUploadHandler = event => {
    const pictureData = new FormData()
    const postID = this.props.skateSpots.post._id
    pictureData.append('image', this.state.selectedFile)
    this.props.addPicture(postID, pictureData)
  }

  render() {
    return (
      <div>
        <input type="file" name="image" onChange={this.fileSelectorHandler} />
        <button onClick={this.fileUploadHandler}>Upload</button>
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
  { addPicture }
)(SpotPics)
