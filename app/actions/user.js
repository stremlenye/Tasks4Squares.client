import * as api from 'api'
import * as constants from 'constants/login'

export function signup (login, password) {
  return dispatch => api.signup.withBody({ login, password }).exec()
    .then(() => dispatch({ type: constants.SIGNED_UP }))
    .catch(err => dispatch({
      type: constants.SIGNUP_FAILED,
      payload: { err }
    }))
}

export function signin (login, password) {
  return dispatch => api.signin.withBody({ login, password }).exec()
    .then(() => dispatch({ type: constants.LOGGED_IN }))
    .catch(error => dispatch({
      type: constants.LOGIN_FAILED,
      payload: { error }
    }))
}
