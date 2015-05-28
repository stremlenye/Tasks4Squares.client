import autobind from 'autobind-decorator'
import {EventEmitter} from 'events'
import dispatcher from 'dispatcher'

const event = 'event'

/**
 * Abstract class implemeting store basics
 */
@autobind
class BaseStore extends EventEmitter {

  constructor (dispatcherCallback) {
    super()
    this.dispatcherIndex = dispatcher.register(dispatcherCallback.bind(this))
  }

  /**
   * Adds store changes listener
   * DEPRECATED: use addListener
   * @param {function} listener callback
   */
  subscribe (listener) {
    this.addListener(event, listener)
  }

  /**
   * Removes store changes listener
   * DEPRECATED: use removeListener
   * @param {function} listener callback
   */
  unsubscribe (listener) {
    this.removeListener(event, listener)
  }

  emitChange () {
    this.emit(event)
  }
}

export default BaseStore
