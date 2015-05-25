/*
 * cookies.js
 * utils for cookies manipulations
 */

import cookie from 'cookie'

const cookiesUtil = {}

cookiesUtil.get = key => {
  const cookies = cookie.parse(document.cookie)
  if (key !== undefined) {
    return cookies[key]
  }
  return cookies
}

cookiesUtil.delete = key => {
  const val = cookiesUtil.get(key)
  document.cookie = cookie.serialize(key, val, {
    expires: new Date(0)
  })
}

export default cookiesUtil
