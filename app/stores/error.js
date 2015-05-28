/* error.js
 * Error stores
 */

import dispatcher from 'dispatcher'
import globalConstants from 'constants'
import constants from 'constants/error'
import navigationConstants from 'constants/navigation'

import {EventEmitter} from 'events'

const reason = null
const actionType = null
const state = constants.states.handled

const errorStores = {}

const changeEvent = 'error_changed'
const emitter = new EventEmitter()
function emit () {
  emitter.emit(changeEvent)
}

errorStores.subscribe = listener => {
  emitter.addListener(changeEvent, listener)
}

errorStores.unsubscribe = listener => {
  emitter.removeListener(changeEvent, listener)
}

errorStores.getState = () => {
  return state
}

errorStores.getReason = () => {
  return reason
}

errorStores.getActionType = () => {
  return actionType
}

errorStores.dispatcherIndex = dispatcher.register(payload => {
  if (payload.action.actionType === constants.actions.handle
      || payload.action.actionType === navigationConstants.actions.navigate) {
    state = constants.states.handled
    emit()
    return
  }
  if (payload.source !== globalConstants.payloadSources.error) {
    return
  }
  reason = payload.action.reason
  actionType = payload.action.actionType
  state = constants.states.rised
  emit()
})

export default errorStores
