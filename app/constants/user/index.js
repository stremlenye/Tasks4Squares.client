/*
* Users feature related constants
*/

const prefix = 'users'

function formatActionName (action, state) {
  return `${prefix}_${action}_${state}`
}

export default {
  actions: {
    register: {
      started: formatActionName('register', 'started'),
      finished: formatActionName('register', 'finished'),
      failed: formatActionName('register', 'failed'),
    }
  }
}
