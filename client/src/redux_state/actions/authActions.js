import axios from 'axios'
import { GET_ERRORS } from './types'

//Register User
export const registerUser = (userData, history) => {
  axios
    .post('/api/users/register', userData)
    .then(res => history.push('/'))
    .catch(err =>
      dispatchEvent({
        type: GET_ERRORS,
        payload: err.response.data
      })
    )
}
