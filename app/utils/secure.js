import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

export default function secure (Component) {
  @connect(({ application: { loggedin } }) => ({loggedin}))
  class Secured extends React.Component {
    constructor () {
      super()
    }

    static contextTypes = {
      router: PropTypes.object.isRequired
    }

    static propTypes = {
      loggedin: PropTypes.bool.isRequired
    }

    componentWillMount () {
      const { context: { router }, props: { loggedin } } = this
      if (loggedin)
        return
      router.transitionTo('signin')
    }

    render () {
      return <Component {...this.props} />
    }
  }
  return Secured
}
