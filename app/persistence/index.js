import store from 'store'

const tokenKey = 'token'

export function setToken (token) {
  store.set(tokenKey, token)
}

export function getToken () {
  return store.get(tokenKey)
}

export function removeToken () {
  store.remove(tokenKey)
}
