/*
* user.js
* User related services
*/

import settings from 'settings'
import Http from 'immutable-http'

const api = new Http().withJsonResponse()

const register = api.withUrl(settings.api.url + '/users/register')
                          .withJsonBody()
                          .withMethod('POST')

const user = {}

user.register = (name, login, password) => {
  return register.withBody({name, login, password}).exec()
}

export default user
