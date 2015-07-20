import * as constants from 'constants'

export function initialize () {
  return {
    type: constants.INITIALIZE
  }
}
export function eraseSubmit () {
  return dispatch => dispatch({
    type: constants.ERASE_SUBMIT
  })
}
