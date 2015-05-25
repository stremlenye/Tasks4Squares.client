import React from 'react'
import stores from 'stores/error'
import constants from 'constants/error'

class ErrorPanel extends React.Component {

  constructor () {
    super()
    this.state = this.getState()
  }

  getState () {
    return {
      state: stores.getState(),
      reason: stores.getReason()
    }
  }

  onChange () {
    this.setState(this.getState())
  }

  componentDidMount () {
    stores.subscribe(this.onChange)
  }

  componentWillUnmount () {
    stores.unsubscribe(this.onChange)
  }

  render () {
    if (this.state.state === constants.states.handled)
      return null
    return (
      <div {...this.props} className="alert alert-danger" role="alert">
        {this.state.reason}
      </div>
    )
  }
}

export default ErrorPanel
