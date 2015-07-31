import React, { PropTypes } from 'react'
import { connectSubmitPage } from 'decorators'
import {
  FlatButton, TextField, Card, CardTitle, CardActions, CardText, AppBar
} from 'material-ui'
import { signin } from 'actions/user'
import { redirectOnSucceed, transition } from 'decorators'

@redirectOnSucceed('/')
@transition
class Signin extends React.Component {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    succeed: PropTypes.bool,
    failureReason: PropTypes.object,
    onTransition: PropTypes.func.isRequired
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
    const { props: { succeed, failureReason, onTransition } } = this
    return (
      <div>
        <AppBar title="Tasks4Squares"
          iconElementRight={<FlatButton label="Signup"
            onClick={event => onTransition('signup', event)} />} />
        <Card initiallyExpanded={true}>
          <CardTitle
            title="Signin"
            subtitle="Signin into Tasks4Squares and start sorting out things" />
          <CardText>
            <TextField id="login" name="login" hintText="your@mail.com"
              type="email" floatingLabelText="Email"
              onChange={::this.onFieldChanged} />
            <TextField id="password" name="password" type="password"
              hintText="XyZ12%1" floatingLabelText="Password"
              onChange={::this.onFieldChanged} />
          </CardText>
          <CardActions>
            <FlatButton primary={true} label="Signin"
              onClick={::this.onSubmit} />
          </CardActions>
          { (!succeed && failureReason) ? <p>{failureReason.toString()}</p>
            : null }
        </Card>
      </div>
    )
  }
}

export default connectSubmitPage(Signin, signin)
