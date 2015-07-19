import api from 'api'
import * as constants from 'constants'

export function initialize () {
  return {
    type: constants.INITIALIZE
  }
}

export function signup () {}

export function signin (login, password) {
  return dispatch => api.signin.withBody({ login, password }).exec()
    .then(() => dispatch({ type: constants.LOGGEDIN }))
    .catch(err => dispatch({
      type: constants.LOGIN_FAILED,
      payload: { err }
    }))
}
