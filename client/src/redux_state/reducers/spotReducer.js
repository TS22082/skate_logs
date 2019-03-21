import { ADD_SPOT, HIDE_NEW_SPOT_FORM, SHOW_NEW_SPOT_FORM } from '../types'

const initialState = {
  showNewSpotForm: false,
  locationData: []
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
        locationData: [action.payload, ...state.locationData]
      }
    default:
      return state
  }
}
