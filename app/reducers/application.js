import { LOGGED_IN, LOGGED_OUT } from 'constants/user'
import { createReducer } from 'utils'

const initial = {
  token: null
}

const actionsMap = {
  [LOGGED_IN]: (_, { token }) => ({ token }),
  [LOGGED_OUT]: () => ({ token: null })
}

export default createReducer(initial, actionsMap)
