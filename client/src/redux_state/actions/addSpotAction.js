import { ADD_SPOT } from '../types'

export const addNewSpot = locationData => {
  return {
    type: ADD_SPOT,
    payload: locationData
  }
}
