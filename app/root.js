import React from 'react'
import { Redirect, Router, Route } from 'react-router'
import HashHistory from 'react-router/lib/HashHistory'
import { Provider } from 'redux/react'
import { createStore } from 'redux'
import { Application, Signin, Tasks } from 'components'
import * as reducers from 'reducers'

const store = createStore(reducers)

function renderRoutes () {
  return (
    <Router history={new HashHistory()}>
      <Route path="/" component={Application}>
        <Route path="tasks" component={Tasks} />
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
