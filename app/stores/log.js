/* log.js
* Misc clientside logging store
*/

import dispatcher from 'dispatcher'

/*eslint-disable no-console */
function log (payload) {
  if (console.log) {
    console.log(payload)
  }
}
/*eslint-enable no-console */

class LogStore {
}

LogStore.dispatcherIndex = dispatcher.register(payload => {
  log(payload)
})

export default new LogStore()
