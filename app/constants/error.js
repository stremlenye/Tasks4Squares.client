/**
  * error.js
  * Error constants
  */

const prefix = 'error_'

export default {
  states: {
    handled: prefix + 'handled',
    rised: prefix + 'rised'
  },
  actions: {
    handle: prefix + 'handle'
  }
}
