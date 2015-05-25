/**
* Application bootstrap  and start point point
*/
import 'stores/log'
import React from 'react'

import Router, {Route} from 'react-router'

import Main from 'components/main'
import Registration from 'components/pages/user/registration'
import Auth from 'components/pages/auth'
import Tasks from 'components/pages/tasks'

const routes = (<Route name="main" path="/" handler={Main}>
                  <Route name="registration"
                    path="register" handler={Registration} />
                  <Route name="login" path="login"
                    handler={Auth} />
                  <Route name="tasks" path="tasks"
                    handler={Tasks} />
                </Route>)

Router.run(routes, Handler => {
  React.render(<Handler/>, document.body)
})
