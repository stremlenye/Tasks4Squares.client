import * as constants from 'constants/login'
import { createReducer } from 'utils'

const initial = {
  loggedin: true
}

const actionsMap = {
  [constants.LOGGED_IN]: () => ({ loggedin: true }),
  [constants.LOGIN_FAILED]: () => ({ loggedin: false })
}

export default createReducer(initial, actionsMap)
