/**
 * Stores the current user related information
 */

import dispatcher from 'dispatcher'
import {EventEmitter} from 'events'

import appConstants from 'constants'
import userConstants from 'constants/user'

let user = null
let state = appConstants.store.state.none

class UserStore extends EventEmitter {
  constructor () {
    super()
    this.eventName = 'User_Store_Changed'
    this.dispatcherIndex = dispatcher.register(this.process.bind(this))
  }

  subscribe (listener) {
    this.addListener(this.eventName, listener)
  }

  unsubscribe (listener) {
    this.removeListener(this.eventName, listener)
  }

  process (action) {
    switch (action.type) {
      case userConstants.actions.register.started:
        user = action.payload
        state = appConstants.store.state.updating
        this.emit(this.eventName)
        break
      case userConstants.actions.register.finished:
        user = action.payload.user
        user.registered = true
        state = appConstants.store.state.ready
        this.emit(this.eventName)
        break
      case userConstants.actions.register.failed:
        user = action.payload.user
        user.registered = false
        state = appConstants.store.state.ready
        this.emit(this.eventName)
        break
      default:
        return
    }
  }

  get user () {
    return user
  }

  get state () {
    return state
  }
}

export default new UserStore()
