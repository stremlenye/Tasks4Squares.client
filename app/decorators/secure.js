import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import redirect from './redirect' //eslint-disable-line

export default function secure (Component) { // eslint-disable-line padded-blocks, max-len
  @connect(state => state.application)
  @redirect('signin', ({ token }) => !token)
  class Secured extends React.Component {
    constructor () {
      super()
    }

    static propTypes = {
      application: PropTypes.shape({
        token: PropTypes.bool
      }).isRequired
    }

    render () {
      return <Component {...this.props} />
    }
  }
  return Secured
}
