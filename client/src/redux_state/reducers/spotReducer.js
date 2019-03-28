import {
  ADD_SPOT,
  HIDE_NEW_SPOT_FORM,
  SHOW_NEW_SPOT_FORM,
  GET_POSTS
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
    default:
      return state
  }
}
