import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import redirect from './redirect'

export default function secure (Component) {
  @connect(({ application: { loggedin } }) => ({ loggedin }))
  @redirect('signin', ({loggedin}) => !loggedin)
  class Secured extends React.Component {
    constructor () {
      super()
    }

    static propTypes = {
      loggedin: PropTypes.bool.isRequired
    }

    render () {
      return <Component {...this.props} />
    }
  }
  return Secured
}
