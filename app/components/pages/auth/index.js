/*
* auth.jsx
* Authentication view based on React component
*/

import React from 'react/addons'
import autobind from 'autobind-decorator'
import {authActions} from 'actions'

class Auth extends React.Component {

  @autobind
  handleSubmit (event) {
    event.preventDefault()
    event.stopPropagation()
    const login = this.refs.login.getDOMNode().value.trim()
    const password = this.refs.password.getDOMNode().value.trim()
    this.setState({isLoading: true})
    authActions.signIn(login, password)
  }

  render () {
    return (
      <form role="form" onSubmit={this.handleSubmit}>
        <div>
          <label className="control-label">Login</label>
          <input type="text" ref="login" name="login" id="login"
            placeholder="Your login"/>
        </div>
        <div>
          <label >Password</label>
          <input type="password"
            ref="password" name="password" id="password"
            placeholder="Your password"/>
        </div>
        <button type="submit">
            Sign in
        </button>
        <a className="btn btn-default" href="#/registration">Register</a>
    </form>
    )
  }
}

export default Auth
