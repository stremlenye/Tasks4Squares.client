import React, { PropTypes } from 'react'
import { connectSubmitPage } from 'utils'
import { signup } from 'actions/user'

class Signup extends React.Component {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    succeed: PropTypes.bool,
    failureReason: PropTypes.object
  }

  onFieldChanged (event) {
    event.preventDefault()
    this.setState({[event.target.name]: event.target.value})
  }

  onSubmit (event) {
    event.preventDefault()
    const {
      props: { onSubmit: callback },
      state: {name, login, password } } = this
    callback(name, login, password)
  }

  render () {
    const { props: { succeed, failureReason } } = this
    return (
      <form onChange={::this.onFieldChanged} onSubmit={::this.onSubmit}>
        <fieldset>
          <label htmlFor="name">Email</label>
          <input id="name" name="name" placeholder="Vasiliy"
            type="text" />
          <label htmlFor="login">Email</label>
          <input id="login" name="login" placeholder="your@mail.com"
            type="email" />
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password"
             placeholder="XyZ12%1" />
           <button type="submit">Signup</button>
        </fieldset>
        { (!succeed && failureReason) ? <p>{failureReason.toString()}</p>
          : null }
      </form>
    )
  }
}

export default connectSubmitPage(Signup, signup)
