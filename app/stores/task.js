/**
* task.js
* Task stores
*/
import _ from 'lodash'
import BaseStore from './base'
import constants from 'constants/task'

let tasks = []

class TasksStore extends BaseStore {
  get tasks () {
    return tasks
  }
}

function dispatcherCallback (payload) {
  const action = payload.action

  switch (action.actionType) {
    case constants.actions.listLoaded:
      tasks = action.tasks
      this.emitChange()
    break

    case constants.actions.added:
      tasks.push(action.task)
      this.emitChange()
    break

    case constants.actions.updated:
      _.remove(tasks, t => {
        return t.id === action.task.id
      })
      tasks.push(action.task)
      this.emitChange()
    break

    case constants.actions.deleted:
      _.remove(tasks, t => {
        return t.id === action.id
      })
      this.emitChange()
    break

    default:
      return
  }
}

export default new TasksStore(dispatcherCallback)
