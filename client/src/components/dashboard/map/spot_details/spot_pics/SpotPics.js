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

  componentDidMount() {
    console.log(this.props.skateSpots.post._id)
    //console.log(this.props.skateSpots._id)
  }

  fileSelectorHandler = event => {
    this.setState({ selectedFile: event.target.files[0] })
  }

  fileUploadHandler = event => {
    const fd = new FormData()
    fd.append('image', this.state.selectedFile, this.state.selectedFile.name)
    this.props.addPicture(this.props.skateSpots.post._id, fd)
  }

  render() {
    return (
      <div>
        <input type="file" onChange={this.fileSelectorHandler} />
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
