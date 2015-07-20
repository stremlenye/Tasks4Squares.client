import React from 'react'
import { Redirect, Router, Route } from 'react-router'
import HashHistory from 'react-router/lib/HashHistory'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { log } from 'middlewares/log'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Application, Signin, Signup, Tasks } from 'components'
import * as reducers from 'reducers'

const reducer = combineReducers(reducers)
const finalCreateStore = applyMiddleware(thunk, log)(createStore)
const store = finalCreateStore(reducer)

const history = new HashHistory()

function renderRoutes () {
  return (
    <Router history={history}>
      <Route path="/" component={Application}>
        <Route path="tasks" component={Tasks} />
        <Route path="signup" component={Signup} />
        <Route path="signin" component={Signin} />
        <Redirect from="/" to="tasks" />
      </Route>
    </Router>
  )
}

class Root extends React.Component {
  render () {
    return (
      <Provider store={store}>
        {() => {return renderRoutes()}}
      </Provider>
    )
  }
}

export default Root
