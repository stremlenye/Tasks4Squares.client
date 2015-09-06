import { getToken } from 'persistence'

export default function createRehydrationPayload () {
  return {
    application: {
      token: getToken
    }
  }
}
