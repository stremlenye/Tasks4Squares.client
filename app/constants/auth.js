/**
 * auth.js
 * Authentication related constants
 */

const prefix = 'auth_'

export default {
  actions: {
    signedIn: prefix + 'signedIn',
    signedOut: prefix + 'signedOut',
    failed: prefix + 'failed'
  },
  states: {
    signedOut: 'signed_out',
    signedIn: 'signed_in',
    failed: 'failed'
  }
}
