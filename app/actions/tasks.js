import * as api from 'api'
import { TASK_CREATED, TASKS_FETCHED } from 'constants/tasks'
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

export function fetchTasks () {
  return dispatch => addAuthHeader(api.fetchTasks)
    .exec()
    .then(({ response }) => dispatch({
      type: TASKS_FETCHED,
      payload: response
    }))
}
