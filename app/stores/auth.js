/*
* auth.js
* Authentication stores. Formaly local cache of authentication status with
* push notifications.
*/

import dispatcher from 'dispatcher'
import EventEmitter from 'events'
import changeEvent from 'authStores_changed'
import constants from 'constants/auth'

const emitter = new EventEmitter()

function emit () {
  emitter.emit(changeEvent)
}

let state = constants.states.signedOut

function setStatus (newState) {
  state = newState
}

function signIn () {
  setStatus(constants.states.signedIn)
  emit()
}

function signOut () {
  setStatus(constants.states.signedOut)
  emit()
}

class AuthStores {

  subscribe (listener) {
    emitter.addListener(changeEvent, listener)
  }

  unsubscribe (listener) {
    emitter.removeListener(changeEvent, listener)
  }

  getState () {
    return state
  }

  isAuthenticated () {
    return this.getState() === constants.states.signedIn
  }
}

AuthStores.dispatcherIndex = dispatcher.register(payload => {
  const action = payload.action

  switch (action.actionType) {
    case constants.actions.signedIn:
      signIn(action.authData)
      break

    case constants.actions.logout:
    case constants.actions.failed:
      signOut()
      break

    default:
      return
  }
})

export default new AuthStores()
