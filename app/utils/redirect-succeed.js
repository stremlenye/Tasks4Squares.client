import React, { PropTypes } from 'react'

export default function redirectOnSucceed (Form, mapLocation) {
  return React.createClass({

    contextTypes: {
      router: PropTypes.object.isRequired
    },

    propTypes: {
      location: PropTypes.object.isRequired
    },

    componentWillReceiveProps ({ succeed }) {
      if (!succeed)
        return
      const { context: { router }, props: { location } } = this
      router.transitionTo(mapLocation(location))
    },

    render () {
      return <Form {...this.prop} />
    }
  })
}
