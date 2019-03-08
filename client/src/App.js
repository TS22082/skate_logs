import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Landing from './components/layout/landing/Landing'
import './App.css'
import Nav from './components/nav/Nav'

import store from './redux_state/store'
import { Provider } from 'react-redux'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Nav />
            <Route exact path="/" component={Landing} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
