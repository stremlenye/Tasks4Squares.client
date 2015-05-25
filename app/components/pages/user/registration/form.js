/**
 * Registration form
 */
import React from 'react'
import userActions from 'actions'

class Form extends React.Component {

  handleSubmit (event) {
    event.preventDefault()
    event.stopPropagation()
    const name = this.refs.name.getDOMNode().value.trim()
    const login = this.refs.login.getDOMNode().value.trim()
    const password = this.refs.password.getDOMNode().value.trim()
    userActions.register(name, login, password)
  }

  render () {
    return (
      <form role="form" onSubmit={this.handleSubmit.bind(this)}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" ref="name"
            placeholder="Your name"
            />
        </div>
        <div>
          <label htmlFor="login">Login</label>
          <input type="text" name="login" id="login"
            ref="login"
            placeholder="Your login" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password"
            ref="password"
            placeholder="Your password" />
        </div>
        <button type="submit">
          Register
        </button>
      </form>
    )
  }
}

export default Form
