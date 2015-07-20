import React, { PropTypes } from 'react'

export default function redirect (path, predicate) {
  return Component =>
    class Composed extends React.Component {
      static contextTypes = {
        router: PropTypes.object.isRequired
      }

      componentWillMount () {
        const { context: { router }, props } = this
        if (predicate(props))
          router.transitionTo(path)
      }

      componentWillReceiveProps (nextProps) {
        const { context: { router } } = this
        if (predicate(nextProps))
          router.transitionTo(path)
      }

      render () {
        return <Component {...this.props} />
      }
    }
}
