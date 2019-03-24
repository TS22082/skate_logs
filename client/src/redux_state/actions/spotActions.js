import axios from 'axios'

import {
  HIDE_NEW_SPOT_FORM,
  ADD_SPOT,
  SHOW_NEW_SPOT_FORM,
  GET_ERRORS,
  CLEAR_ERRORS
} from './../types'

// Add a new skate spot
export const addNewSpot = locationData => dispatch => {
  axios
    .post('/api/posts', locationData)
    .then(res => dispatch({ type: ADD_SPOT, payload: res.data }))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }))
}

export const showNewAddSpotForm = () => {
  return {
    type: SHOW_NEW_SPOT_FORM
  }
}

export const hideNewSpotForm = () => {
  return {
    type: HIDE_NEW_SPOT_FORM
  }
}

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  }
}
