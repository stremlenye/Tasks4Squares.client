import React from 'react'
import { RouteHandler } from 'react-router'

class Application extends React.Component {
  render () {
    console.log('Application')
    return (<div>{this.props.children}</div>)
  }
}

export default Application
