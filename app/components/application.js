import React from 'react'
import { Connector } from 'redux/react'
import { Route, Redirect } from 'react-router'
import { Frame, Signin, Tasks } from 'application/components'

const routes = (
  <Route handler={Frame}>
    <Route path="signin" handler={Signin} />
    <Route path="tasks" handler={Tasks} />
    <Redirect from="/" to="tasks" />
  </Route>
)

class Application {
  render () {
    return (
      <Connector select={state => ({ state: state.application })}>
        {this.renderRoutes}
      </Connector>
    )
  }

  renderRoutes () {
    return routes
  }
}

export default Application
