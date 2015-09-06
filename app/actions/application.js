import * as constants from 'constants'
import { getToken } from 'persistence'

export function initialize () {
  const token = getToken()
  return {
    type: constants.INITIALIZE,
    payload: {
      token
    }
  }
}
