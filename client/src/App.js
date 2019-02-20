import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Landing from './components/layout/landing/Landing'
import './App.css'
import Nav from './components/nav/Nav'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Router>
          <Route exact path="/" component={Landing} />
        </Router>
      </div>
    )
  }
}

export default App
