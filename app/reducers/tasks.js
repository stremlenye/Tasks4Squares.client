import createReducer from 'utils/create-reducer'
import { TASK_CREATED } from 'constants/tasks'

const actionsMap = {
  [TASK_CREATED]: (state, task) => ({ tasks: state.tasks.concat([task]) })
}

const initialState = {
  tasks: []
}

export default createReducer(initialState, actionsMap)
