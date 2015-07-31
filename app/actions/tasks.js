import * as api from 'api'
import { TASK_CREATED } from 'constants/tasks'
import { getToken } from 'persistence'

export function createTask (text, priority) {
  return dispatch => api.createTask
    .header('Authorization', `Token ${getToken()}`)
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
