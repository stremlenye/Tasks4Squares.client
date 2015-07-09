import * as constants from 'constants'

const initial = {
  loggedin: true
}

const actionsMap = {
  [constants.LOGGEDIN]: () => ({ loggedin: true }),
  [constants.LOGIN_FAILED]: () => ({ loggedin: false })
}

export function apptication (state = initial, { type, payload }) {
  const reducer = actionsMap[type]
  if (reducer)
    Object.assign({}, state, reducer(state, payload))
  return state
}
