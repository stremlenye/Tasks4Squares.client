import createReducer from 'utils/create-reducer'
import { TASK_CREATED, TASKS_FETCHED } from 'constants/tasks'

const actionsMap = {
  [TASKS_FETCHED]: (state, tasks) => ({ tasks }),
  [TASK_CREATED]: (state, task) => ({ tasks: state.tasks.concat([task]) })
}

const initialState = {
  tasks: []
}

export default createReducer(initialState, actionsMap)
