import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import Landing from './components/landing/Landing'
import './App.css'
import store from './redux_state/store'
import { Provider } from 'react-redux'
import PrivateRoute from './components/auth/PrivateRoute'
import Dashboard from './components/dashboard/Dashboard'
import setAuthToken from './components/auth/setAuthToken'
import { setCurrentUser, logoutUser } from './redux_state/actions/authActions'
import { clearCurrentProfile } from './redux_state/actions/profileActions'
import Nav from './components/nav/Nav'
import CreateSpot from './components/dashboard/map/create_spot/CreateSpot'

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken)
  const decoded = jwt_decode(localStorage.jwtToken)
  store.dispatch(setCurrentUser(decoded))
  const currentTime = Date.now() / 1000
  console.log('Time Left: ' + Math.ceil(decoded.exp - currentTime))

  if (decoded.exp < currentTime) {
    console.log('token expired')
    store.dispatch(logoutUser())
    store.dispatch(clearCurrentProfile())
    window.location.href = '/'
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Nav />
        <Router>
          <div className="App">
            <Route exact path="/" component={Landing} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/createSpot" component={CreateSpot} />
            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
