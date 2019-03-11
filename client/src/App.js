import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from './components/landing/Landing'
import './App.css'
import Nav from './components/nav/Nav'

import store from './redux_state/store'
import { Provider } from 'react-redux'
import PrivateRoute from './components/auth/PrivateRoute'
import Dashboard from './components/dashboard/Dashboard'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Nav />
            <Route exact path="/" component={Landing} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
