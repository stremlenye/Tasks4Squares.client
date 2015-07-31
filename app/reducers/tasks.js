import createReducer from 'utils/create-reducer'
import { TASK_CREATED } from 'constants/tasks'

const actionsMap = {
  [TASK_CREATED]: (state, task) => state.push(task)
}

const tasks = []

export default createReducer(tasks, actionsMap)
