import React, { PropTypes } from 'react'
import { Styles } from 'material-ui'
import { Redirect, Router, Route } from 'react-router'
import BrowserHistory from 'react-router/lib/BrowserHistory'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { log } from 'middlewares/log'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Application, Signin, Signup, Tasks } from 'components'
import * as reducers from 'reducers'
import { createRehydrationPayload } from 'rehydration'

const rehydrationPayload = createRehydrationPayload()

const reducer = combineReducers(reducers)
const finalCreateStore = compose(applyMiddleware(thunk, log))(createStore)
const store = finalCreateStore(reducer, rehydrationPayload)
if (module.hot) {
    // Enable Webpack hot module replacement for reducers
  module.hot.accept('reducers', () => {
    const nextRootReducer = require('reducers/index')
    store.replaceReducer(nextRootReducer)
  })
}

const ThemeManager = new Styles.ThemeManager()

const history = new BrowserHistory()

function renderRoutes () {
  return (
    <Router history={history}>
      <Route component={Application}>
        <Route path="tasks" component={Tasks} />
        <Route path="signup" component={Signup} />
        <Route path="signin" component={Signin} />
      </Route>
      <Redirect from="/" to="tasks" />
    </Router>
  )
}

class Root extends React.Component {

  static childContextTypes = {
    muiTheme: PropTypes.object
  }

  getChildContext () {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
  }

  render () {
    return (
      <Provider store={store}>
        {() => {return renderRoutes()}}
      </Provider>
    )
  }
}

export default Root
