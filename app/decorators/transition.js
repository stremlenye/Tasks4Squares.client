import React, { PropTypes } from 'react'

export default function (Component) {
  return class Composed extends React.Component {
    static contextTypes = {
      router: PropTypes.shape({
        transitionTo: PropTypes.func.isRequired
      }).isRequired
    }

    onTransition (path, event) {
      event.preventDefault()
      event.stopPropagation()
      const {
        context: { router: { transitionTo } }
      } = this
      transitionTo(path)
    }

    render () {
      return <Component {...this.props} onTransition={::this.onTransition}/>
    }
  }
}
