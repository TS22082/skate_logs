import axios from 'axios'

import {
  HIDE_NEW_SPOT_FORM,
  ADD_SPOT,
  SHOW_NEW_SPOT_FORM,
  GET_ERRORS,
  CLEAR_ERRORS,
  POST_LOADING,
  GET_POSTS,
  GET_POST,
  DELETE_POST
} from './../types'

// Add a new skate spot
export const addNewSpot = post => dispatch => {
  axios
    .post('/api/posts', post)
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

// Get Skate spots by id
export const getPost = id => dispatch => {
  dispatch(setPostLoading())
  axios
    .get(`/api/posts/${id}`)
    .then(res => dispatch({ type: GET_POST, payload: res.data }))
    .catch(err => dispatch({ type: GET_POST, payload: null }))
}

//Add like
export const addLike = id => dispatch => {
  axios
    .post(`/api/posts/like/${id}`)
    .then(res => dispatch(getPost(id)))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }))
}

//Remove like
export const removeLike = id => dispatch => {
  axios
    .post(`/api/posts/unlike/${id}`)
    .then(res => dispatch(getPost(id)))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }))
}

// Delete Post
export const deletePost = id => dispatch => {
  axios
    .delete(`/api/posts/${id}`)
    .then(res => dispatch({ type: DELETE_POST, payload: id }))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }))
}

// Add Comment
export const addComment = (postId, commentData) => dispatch => {
  dispatch(clearErrors())
  axios
    .post(`/api/posts/comment/${postId}`, commentData)
    .then(res => dispatch({ type: GET_POST, payload: res.data }))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }))
}

// Delete Comment
export const deleteComment = (postId, commentId) => dispatch => {
  axios
    .delete(`/api/posts/comment/${postId}/${commentId}`)
    .then(res => dispatch({ type: GET_POST, payload: res.data }))
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

// Set loading state
export const setPostLoading = () => {
  return {
    type: POST_LOADING
  }
}
