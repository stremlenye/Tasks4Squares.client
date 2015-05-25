/*
 * Creators for user actions
 */
import service from 'services/user'
import dispatcher from 'AppDispatcher'
import constants from 'constants/user'

export default {

  register: (name, login, password) => {
    dispatcher.handleViewAction(constants.actions.register.started, {
      name, login
    })
    return service.register(name, login, password)
      .then(result =>
        dispatcher.handleServerAction(constants.actions.register.finished, {
          user: result.response
        }),
        result =>
        dispatcher.handleErrorAction(constants.actions.register.failed, {
          user: {
            name, login
          },
          result: result.response
        })
      )
  }
}
