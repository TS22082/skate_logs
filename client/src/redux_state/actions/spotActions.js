import { HIDE_NEW_SPOT_FORM, ADD_SPOT, SHOW_NEW_SPOT_FORM } from './../types'

export const addNewSpot = locationData => {
  return {
    type: ADD_SPOT,
    payload: locationData
  }
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
