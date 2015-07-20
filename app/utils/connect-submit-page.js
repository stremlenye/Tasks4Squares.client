import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'

/**
 * Put form into generic container
 * @param {Object} Form - React Component
 * @param {submitCallback} submitAction - redux flow action would be called on
 * submit
 * @returns {Object} React Component
 */
export default function connectSubmitForm (Form, submitAction) {
  return React.createClass({

    contextTypes: {
      store: PropTypes.shape({
        dispatch: PropTypes.func.isRequired
      }).isRequired
    },

    getInitialState () {
      return {}
    },

    onSubmit (...args) {
      const { context: { store: { dispatch } } } = this
      const { submitAction: bindedSubmit }
        = bindActionCreators({ submitAction }, dispatch)
      bindedSubmit(...args)
        .then(() => this.setState({ succeed: true }))
        .catch(error => this.setState({ succeed: false, failureReason: error }))
    },

    render () {
      const {
        onSubmit,
        props,
        state: { succeed, failureReason }
      } = this
      return (<Form {...props} onSubmit={onSubmit} succeed={succeed}
        failureReason={failureReason} />)
    }
  })
}
