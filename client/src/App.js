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
import ShowSpot from './components/dashboard/map/show_spot/ShowSpot'

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken)
  const decoded = jwt_decode(localStorage.jwtToken)
  store.dispatch(setCurrentUser(decoded))
  const currentTime = Date.now() / 1000

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
        <Router>
          <div className="App">
            <Nav />
            <Route exact path="/" component={Landing} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/post/:id" component={ShowSpot} />
            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
