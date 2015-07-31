import React, { PropTypes } from 'react'
import {
  FlatButton, TextField, Card, CardTitle, CardActions, CardText, AppBar
} from 'material-ui'
import { connectSubmitPage } from 'utils'
import { signup } from 'actions/user'
import { redirectOnSucceed } from 'utils'

@redirectOnSucceed('/signin')
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
      <div>
        <AppBar title="Tasks4Squares" />
        <Card initiallyExpanded={true}>
          <CardTitle
            title="Signup"
            subtitle="Signup into Tasks4Squares and start sorting out things" />
          <CardText>
            <TextField id="name" name="name" hintText="Vasiliy"
              type="text" floatingLabelText="Name"
              onChange={::this.onFieldChanged} />
            <TextField id="login" name="login" hintText="your@mail.com"
              type="email" floatingLabelText="Email"
              onChange={::this.onFieldChanged} />
            <TextField id="password" name="password" type="password"
              hintText="XyZ12%1" floatingLabelText="Password"
              onChange={::this.onFieldChanged} />
          </CardText>
          <CardActions>
            <FlatButton primary={true} label="Signup"
              onClick={::this.onSubmit} />
          </CardActions>
          { (!succeed && failureReason) ? <p>{failureReason.toString()}</p>
            : null }
      </Card>
    </div>
    )
  }
}

export default connectSubmitPage(Signup, signup)
