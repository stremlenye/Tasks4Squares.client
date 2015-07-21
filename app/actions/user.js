import * as api from 'api'
import { setToken, deleteToken } from 'persistence'
import { LOGGED_IN, SIGNED_UP, LOGGED_OUT } from 'constants/user'

export function signup (name, login, password) {
  return dispatch => api.signup.withBody({name, login, password }).exec()
    .then(() => dispatch({ type: SIGNED_UP }))
}

export function signin (login, password) {
  return dispatch => api.signin.withBody({ login, password }).exec()
    .then(({ response: { token }}) => {
      setToken(token)
      return dispatch({ type: LOGGED_IN })
    })
}

export function signout () {
  deleteToken()
  return dispatch => dispatch({
    type: LOGGED_OUT
  })
}
