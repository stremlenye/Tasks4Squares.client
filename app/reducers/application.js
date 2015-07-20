import * as constants from 'constants/login'
import { createReducer } from 'utils'

const initial = {
  loggedin: false
}

const actionsMap = {
  [constants.LOGGED_IN]: () => ({ loggedin: true })
}

export default createReducer(initial, actionsMap)
