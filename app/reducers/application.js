import { LOGGED_IN, LOGGED_OUT } from 'constants/user'
import { INITIALIZE } from 'constants'
import { createReducer } from 'utils'

const initial = {
  loggedin: false
}

const actionsMap = {
  [INITIALIZE]: (state, { loggedin }) => ({ loggedin }),
  [LOGGED_IN]: () => ({ loggedin: true }),
  [LOGGED_OUT]: () => ({ loggedin: false })
}

export default createReducer(initial, actionsMap)
