import { combineReducers } from 'redux'
import authReducer from './authReducer'
import errorReducer from './errorReducer'
import addSpotReducer from './spotReducer'

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  skateSpots: addSpotReducer
})
