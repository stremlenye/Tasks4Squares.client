import * as api from 'api'
import { LOGGED_IN } from 'constants/login'
import { SIGNED_UP } from 'constants/signup'

export function signup (name, login, password) {
  return dispatch => api.signup.withBody({name, login, password }).exec()
    .then(() => dispatch({ type: SIGNED_UP }))
}

export function signin (login, password) {
  return dispatch => api.signin.withBody({ login, password }).exec()
    .then(() => dispatch({ type: LOGGED_IN }))
}
