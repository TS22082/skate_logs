import {
  ADD_SPOT,
  HIDE_NEW_SPOT_FORM,
  SHOW_NEW_SPOT_FORM,
  GET_POSTS,
  GET_POST,
  DELETE_POST
} from '../types'

const initialState = {
  showNewSpotForm: false,
  posts: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case HIDE_NEW_SPOT_FORM:
      return {
        ...state,
        showNewSpotForm: false
      }
    case SHOW_NEW_SPOT_FORM:
      return {
        ...state,
        showNewSpotForm: true
      }
    case ADD_SPOT:
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      }
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      }
    case GET_POST:
      return {
        ...state,
        post: action.payload,
        loading: false
      }
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== action.payload)
      }
    default:
      return state
  }
}
