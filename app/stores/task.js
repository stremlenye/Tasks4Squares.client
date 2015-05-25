/**
* task.js
* Task stores
*/
import _ from 'lodash'

import dispatcher from 'AppDispatcher'

import constants from 'constants/task'

import {EventEmitter} from 'events'

const changeEventName = 'task_changed'

const emitter = new EventEmitter()
let tasks = []

let task = {}

function emit () {
  emitter.emit(changeEventName)
}

task.subscribe = listener => {
  emitter.addListener(changeEventName, listener)
}

task.unsubscribe = listener => {
  emitter.removeListener(changeEventName, listener)
}

task.get = () => {
  return tasks
}

task.dispatcherIndex = dispatcher.register(payload => {
  const action = payload.action

  switch (action.actionType) {
    case constants.actions.listLoaded:
      tasks = action.tasks
      emit()
    break

    case constants.actions.added:
      tasks.push(action.task)
      emit()
    break

    case constants.actions.updated:
      _.remove(tasks, t => {
        return t.id === action.task.id
      })
      tasks.push(action.task)
      emit()
    break

    case constants.actions.deleted:
      _.remove(tasks, t => {
        return t.id === action.id
      })
      emit()
    break

    default:
      return
  }
})

export default task
