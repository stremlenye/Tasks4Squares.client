/*
* auth.js
* Authentication stores. Formaly local cache of authentication status with
* push notifications.
*/
import BaseStore from './base'
import constants from 'constants/auth'

let state = constants.states.signedOut

class AuthStores extends BaseStore {
  get state () {
    return state
  }
}

function dispatcherCallback (payload) {
  const action = payload.action
  switch (action.actionType) {
    case constants.actions.signedIn:
      state = constants.states.signedIn
      this.emitChange()
      break

    case constants.actions.logout:
    case constants.actions.failed:
      state = constants.states.signedOut
      this.emitChange()
      break

    default:
      return
  }
}

export default new AuthStores(dispatcherCallback)
