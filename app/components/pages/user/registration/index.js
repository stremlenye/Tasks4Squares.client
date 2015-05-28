import React from 'react'
import Form from './form'
import appConstants from 'constants'
import {userStore} from 'stores'

export default class Registration extends React.Component {

  constructor () {
    super()
    this.state = this.getState()
  }

  getState () {
    return {
      formDisabled: userStore.state === appConstants.store.state.updating
    }
  }

  onChange () {
    this.setState(this.getState())
  }

  componentDidMount () {
    userStore.subscribe(this.onChange.bind(this))
  }

  componentWillUnmount () {
    userStore.unsubscribe(this.onChange.bind(this))
  }

  render () {
    return (
      <div>
          <h2>Register</h2>
          <Form disabled={this.state.formDisabled} />
      </div>
    )
  }
}
