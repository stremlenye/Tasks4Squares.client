/*
* Misc client side logging store
*/

import BaseStore from './base'

/*eslint-disable no-console */
function log (payload) {
  if (console.log) {
    console.log(payload)
  }
}
/*eslint-enable no-console */

class LogStore extends BaseStore {
}

function dispatcherCallback (payload) {
  log(payload)
}
export default new LogStore(dispatcherCallback)
