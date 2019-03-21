import { combineReducers } from 'redux'
import authReducer from './authReducer'
import errorReducer from './errorReducer'
import addSpotReducer from './addSpotReducer'

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  locationData: addSpotReducer
})
