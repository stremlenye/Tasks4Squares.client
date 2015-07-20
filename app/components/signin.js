import React, { PropTypes } from 'react'
import { connectSubmitPage } from 'utils'
import { signin, eraseLogin } from 'actions/user'

class Signin extends React.Component {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onInit: PropTypes.func.isRequired,
    succeed: PropTypes.bool,
    failureReason: PropTypes.object
  }

  componentWillMount () {
    const { props: { onInit } } = this
    onInit()
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
        //TODO use better error way to display error
        { (!succeed && failureReason) ? <p>{failureReason.toString()}</p>
          : null }
      </form>
    )
  }
}

export default connectSubmitPage(Signin, signin, eraseLogin, 'login')
