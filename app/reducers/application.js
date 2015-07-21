import * as constants from 'constants/user'
import { createReducer } from 'utils'

const initial = {
  loggedin: false
}

const actionsMap = {
  [constants.LOGGED_IN]: () => ({ loggedin: true }),
  [constants.LOGGED_OUT]: () => ({ loggedin: false })
}

export default createReducer(initial, actionsMap)
