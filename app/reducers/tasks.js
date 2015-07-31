import createReducer from 'utils/create-reducer'
import {
  TASK_CREATED, TASKS_FETCHED, TASK_DELETED, TASK_UPDATED
} from 'constants/tasks'

const actionsMap = {
  [TASKS_FETCHED]: (state, tasks) => ({ tasks }),
  [TASK_CREATED]: (state, task) => ({ tasks: state.tasks.concat([task]) }),
  [TASK_UPDATED]: (state, task) => ({
    tasks: state.tasks.filter(({ id }) => id !== task.id).concat([task]) }),
  [TASK_DELETED]: (state, deletedId) => ({
    tasks: state.tasks.filter(({ id }) => id !== deletedId)
  })
}

const initialState = {
  tasks: []
}

export default createReducer(initialState, actionsMap)
