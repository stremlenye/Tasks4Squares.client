import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import redirect from './redirect' //eslint-disable-line

export default function secure (Component) { // eslint-disable-line padded-blocks, max-len
  @connect(state => state.application)
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
