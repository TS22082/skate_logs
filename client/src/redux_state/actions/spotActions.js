import axios from 'axios'

import {
  HIDE_NEW_SPOT_FORM,
  ADD_SPOT,
  SHOW_NEW_SPOT_FORM,
  GET_ERRORS,
  CLEAR_ERRORS,
  POST_LOADING,
  GET_POSTS
} from './../types'

// Add a new skate spot
export const addNewSpot = locationData => dispatch => {
  axios
    .post('/api/posts', locationData)
    .then(res => dispatch({ type: ADD_SPOT, payload: res.data }))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }))
}

// Get skate spots
export const getSpots = () => dispatch => {
  dispatch(setPostLoading())
  axios
    .get('/api/posts')
    .then(res => dispatch({ type: GET_POSTS, payload: res.data }))
    .catch(err => dispatch({ type: GET_POSTS, payload: null }))
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

// Set loading state
export const setPostLoading = () => {
  return {
    type: POST_LOADING
  }
}
