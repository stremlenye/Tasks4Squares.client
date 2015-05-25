/*
 * authActionCreators.js
 * Creators for authentication actions
 */

import dispatcher from 'AppDispatcher'
import constants from 'constants/auth'
import navigationConstants from 'constants/navigation'
import authService from 'services/auth'

export default {

  signIn (login, password) {
    return authService.authenticate(login, password)
      .then(() => {
        dispatcher.handleServerAction({
          actionType: constants.actions.signedIn
        })
        dispatcher.handleServerAction({
          actionType: navigationConstants.actions.navigate,
          route: 'task'
        })
      }, reason => {
        dispatcher.handleErrorAction({
          actionType: constants.actions.failed,
          reason
        })
      })
  },

  signOut () {
    return authService.signout()
      .then(() => {
        dispatcher.handleServerAction({
          actionType: constants.actions.signedOut,
        })
        dispatcher.handleServerAction({
          actionType: navigationConstants.actions.navigate,
          route: 'auth'
        })
      }, reason => {
        dispatcher.handleErrorAction({
          actionType: constants.actions.failed,
          reason
        })
        dispatcher.handleServerAction({
          actionType: navigationConstants.actions.navigate,
          route: 'auth'
        })
      })
  }
}
