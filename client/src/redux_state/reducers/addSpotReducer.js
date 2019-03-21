import { ADD_SPOT } from '../types'

const initialState = {
  locationData: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_SPOT:
      return {
        ...state,
        locationData: [action.payload, ...state.locationData]
      }
    default:
      return state
  }
}
