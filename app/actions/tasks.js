/* task.js
 * task action creators
 */

import dispatcher from 'dispatcher'
import service from 'services/task'
import constants from 'constants/task'

export default {

  list () {
    return service.list().then(tasks => {
      dispatcher.handleServerAction({
        actionType: constants.actions.listLoaded,
        tasks
      }, reason => {
        dispatcher.handleErrorAction({
          actionType: constants.actions.failed,
          reason
        })
      })
    })
  },

  add (text, priority) {
    return service.add(text, priority).then(id => {
      dispatcher.handleServerAction({
        actionType: constants.actions.added,
        task: {
          id,
          text,
          priority
        }
      })
    }, reason => {
      dispatcher.handleErrorAction({
        actionType: constants.actions.failed,
        reason
      })
    })
  },

  update (id, text, priority) {
    return service.update(id, text, priority).then(() => {
      dispatcher.handleServerAction({
        actionType: constants.actions.updated,
        task: {
          id,
          text,
          priority
        }
      })
    }, reason => {
      dispatcher.handleErrorAction({
        actionType: constants.actions.failed,
        reason
      })
    })
  },

  delete (id) {
    return service.delete(id).then(() => {
      dispatcher.handleServerAction({
        actionType: constants.actions.deleted,
        id
      })
    }, reason => {
      dispatcher.handleErrorAction({
        actionType: constants.actions.failed,
        reason
      })
    })
  }
}
