import React from 'react'
import { Redirect, Router, Route, DefaultRoute } from 'react-router'
import HashHistory from 'react-router/lib/HashHistory';
import { Provider } from 'redux/react'
import { createStore } from 'redux'
import { Application, Signin, Tasks } from 'components'
import * as reducers from 'reducers'

const store = createStore(reducers)

function renderRoutes () {
  console.log('ROUTES')
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
    console.log('ROOT')
    return (
      <Provider store={store}>
        {() => {return renderRoutes()}}
      </Provider>
    )
  }
}

export default Root
