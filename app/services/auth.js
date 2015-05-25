/* auth.js
 * Authentication service
 */

import settings from 'settings'
import Http from 'immutable-http'
import cookies from 'utilities/cookies'

const api = new Http().withMethod('POST').withJsonResponse()

const authenticate = api.withUrl(settings.api.url + '/signin').withJsonBody()

const signout = api.withUrl(settings.api.url + '/signout')

const auth = {}

auth.authenticate = (login, password) => {
  return authenticate.withBody({login, password}).exec()
}

auth.signout = () => {
  return signout.exec()
    .then(() => cookies.delete('authenticated'), () => {})
}

// TODO remove this ugly method
auth.isAuthenticated = () => {
  return new Promise(onFulfill => {
    const authFlag = cookies.get('authenticated')
    onFulfill(authFlag !== undefined)
  })
}

export default auth
