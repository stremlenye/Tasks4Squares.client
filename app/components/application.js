import React, { PropTypes } from 'react'

class Application extends React.Component {

  static contextTypes = {
    store: PropTypes.shape({
      dispatch: PropTypes.func.isRequired
    }).isRequired
  }

  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render () {
    return <div>{this.props.children}</div>
  }
}

export default Application
