import React, { Component } from 'react'
import video from '../../../img/Cross_frame.mp4'
import './landing.css'
import Login from './../../auth/login/Login'
import Signup from '../../auth/signup/SignUp'

class Landing extends Component {
  constructor() {
    super()
    this.state = {
      login: true
    }
  }
  render() {
    return (
      <div className="landing">
        <div className="bg-video">
          <video src={video} className="bg-video__content" autoPlay loop />
        </div>
        <div className="login_and_singup">
          <h2 className="landing-heading">Skate about it</h2>
          {this.state.login ? <Login /> : <Signup />}
        </div>
      </div>
    )
  }
}

export default Landing
