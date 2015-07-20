import React, { PropTypes } from 'react'
import { connectSubmitPage } from 'utils'
import { signin } from 'actions/user'

class Signin extends React.Component {

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
    const { props: { onSubmit: callback }, state: { login, password } } = this
    callback(login, password)
  }

  // TODO use better error way to display error
  render () {
    const { props: { succeed, failureReason } } = this
    return (
      <form onSubmit={::this.onSubmit} onChange={::this.onFieldChanged}>
        <fieldset>
          <label htmlFor="login">Email</label>
          <input id="login" name="login" placeholder="your@mail.com"
            type="email" />
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password"
             placeholder="XyZ12%1" />
           <button type="submit">Signin</button>
        </fieldset>

        { (!succeed && failureReason) ? <p>{failureReason.toString()}</p>
          : null }
      </form>
    )
  }
}

export default connectSubmitPage(Signin, signin)
