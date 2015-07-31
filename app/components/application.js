import React, { PropTypes } from 'react'
import { initialize } from 'actions/application'

class Application extends React.Component {

  static contextTypes = {
    store: PropTypes.shape({
      dispatch: PropTypes.func.isRequired
    }).isRequired
  }

  static propTypes = {
    children: PropTypes.node.isRequired
  }

  componentDidMount () {
    const { context: { store: { dispatch } } } = this
    dispatch(initialize())
  }

  render () {
    return <div>{this.props.children}</div>
  }
}

export default Application
