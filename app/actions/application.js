import * as constants from 'constants'
import { getToken } from 'persistence'

export function initialize () {
  const token = getToken()
  return dispatch => dispatch({
    type: constants.INITIALIZE,
    payload: {
      loggedin: !!token
    }
  })
}
