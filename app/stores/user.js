/**
 * Stores the current user related information
 */
import BaseStore from './base'
import appConstants from 'constants'
import userConstants from 'constants/user'

let user = null
let state = appConstants.store.state.none

class UserStore extends BaseStore {
  get user () {
    return user
  }

  get state () {
    return state
  }
}

function dispathcherCallback (action) {
  switch (action.type) {
    case userConstants.actions.register.started:
      user = action.payload
      state = appConstants.store.state.updating
      this.emitChange()
      break
    case userConstants.actions.register.finished:
      user = action.payload.user
      user.registered = true
      state = appConstants.store.state.ready
      this.emitChange()
      break
    case userConstants.actions.register.failed:
      user = action.payload.user
      user.registered = false
      state = appConstants.store.state.ready
      this.emitChange()
      break
    default:
      return
  }
}

export default new UserStore(dispathcherCallback)
