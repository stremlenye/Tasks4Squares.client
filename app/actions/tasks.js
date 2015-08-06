import * as api from 'api'
import {
  TASK_CREATED, TASKS_FETCHED, TASK_DELETED, TASK_UPDATED
} from 'constants/tasks'
import { getToken } from 'persistence'

function addAuthHeader (http) {
  return http.header('Authorization', `Token ${getToken()}`)
}

export function createTask (text, priority) {
  return dispatch => addAuthHeader(api.createTask)
    .body({text, priority: parseInt(priority)}).exec()
    .then(({ response: { id } }) => dispatch({
      type: TASK_CREATED,
      payload: {
        id,
        text,
        priority
      }
    }))
}

export function updateTask (id, text, priority) {
  return dispatch => addAuthHeader(api.updateTask)
    .segment('id', id)
    .body({text, priority: parseInt(priority)}).exec()
    .then(() => dispatch({
      type: TASK_UPDATED,
      payload: {
        id,
        text,
        priority
      }
    }))
}

export function fetchTasks () {
  return dispatch => addAuthHeader(api.fetchTasks)
    .exec()
    .then(({ response }) => dispatch({
      type: TASKS_FETCHED,
      payload: response
    }))
}

export function deleteTask (id) {
  return dispatch => addAuthHeader(api.deleteTask)
    .segment('id', id)
    .exec()
    .then(() => dispatch({
      type: TASK_DELETED,
      payload: id
    }))
}
