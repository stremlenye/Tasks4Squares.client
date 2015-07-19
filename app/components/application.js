import React, { PropTypes } from 'react'

class Application extends React.Component {

  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render () {
    return <div>{this.props.children}</div>
  }
}

export default Application
