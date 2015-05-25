/*
* AppDispatcher.js
* Dispatcher, decorated with helper methods for view and server actions handling
*/

import {Dispatcher} from 'flux'
import constants from 'constants'

class AppDispatcher extends Dispatcher {
  handleViewAction (actionType, payload) {
    this.dispatch({
      source: constants.payloadSources.view,
      type: actionType,
      payload
    })
  }

  handleServerAction (actionType, payload) {
    this.dispatch({
      source: constants.payloadSources.server,
      type: actionType,
      payload
    })
  }

  handleErrorAction (actionType, payload) {
    this.dispatch({
      source: constants.payloadSources.error,
      type: actionType,
      payload
    })
  }
}

export default new AppDispatcher()
