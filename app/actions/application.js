import Http from 'immutable-http'
import * as constants from 'constants'

export function initialize () {
  return {
    type: constants.INITIALIZE
  }
}

const signinRequest = new Http().withUrl('http://localhost:9000/signin')
  .withMethod('GET').withHeader('Content-Type', 'application/json')
  .withResponseType('json')

export function signin (login, password) {
  return dispatch => signinRequest.withBody({ login, password }).exec()
    .then(() => dispatch({ type: constants.LOGGEDIN }))
    .catch(err => dispatch({
      type: constants.LOGIN_FAILED,
      payload: { err }
    }))
}
