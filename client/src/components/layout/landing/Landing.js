import React, { Component } from 'react'
import video from '../../../img/Cross_frame.mp4'
import './landing.css'

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="bg-video">
          <video src={video} className="bg-video__content" autoPlay loop />
        </div>
        <div className="login_and_singup">
          <h2 class="landing-heading">
            Skate about it
          </h2>
        </div>
      </div>
    )
  }
}

export default Landing
