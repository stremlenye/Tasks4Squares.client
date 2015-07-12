import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { Connector } from 'redux/react'
import * as actions from 'actions/application'

class SigninConnectorWrapper extends React.Component {
  render () {
    return (
      <Connector>
        {this.renderForm}
      </Connector>)
  }

  renderForm ({dispatch}) {
    const bindiedActions = bindActionCreators(actions, dispatch)
    const { signin } = bindiedActions
    return (
      <Signin onSubmit={signin} />
    )
  }
}

class Signin extends React.Component {

  constructor () {
    super()
    this.state = {}
  }

  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  onFieldChanged (event) {
    this.state[event.target.name] = event.target.value
    this.setState(this.state)
  }

  onSubmit (event) {
    event.preventDefault()
    const { props: { onSubmit: callback }, state: { login, password } } = this
    callback(login, password)
  }

  render () {
    const { state: { login, password } } = this
    return (
      <form onSubmit={::this.onSubmit}>
        <fieldset>
          <label htmlFor="login">Email</label>
          <input id="login" name="login" placeholder="your@mail.com"
            onChange={::this.onFieldChanged} value={login} type="email" />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" value={password}
            onChange={::this.onFieldChanged} placeholder="XyZ12%1" />
        </fieldset>
        <button type="submit">Signin</button>
      </form>
    )
  }
}

export default SigninConnectorWrapper
