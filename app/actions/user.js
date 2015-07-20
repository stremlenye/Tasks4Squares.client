import * as api from 'api'
import * as constants from 'constants/login'
import { SIGNED_UP, SIGNUP_FAILED } from 'constants/signup'

export function signup (name, login, password) {
  return dispatch => api.signup.withBody({name, login, password }).exec()
    .then(() => dispatch({ type: SIGNED_UP }))
    .catch(err => dispatch({
      type: SIGNUP_FAILED,
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
