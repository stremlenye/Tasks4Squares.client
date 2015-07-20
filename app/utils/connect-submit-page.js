import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

export default function connectSubmitPage (
  Form, submitAction, initAction, reducerName) {
    return connect(state => state[reducerName])(React.createClass({

      propTypes: {
        dispatch: PropTypes.func.isRequired,
        succeed: PropTypes.bool,
        failureReason: PropTypes.object
      },

      render () {
        const { props: { dispatch, succeed, failureReason }, props } = this
        const { submitAction: bindedSubmit, initAction: bindedInit }
          = bindActionCreators({ submitAction, initAction }, dispatch)
        return (<Form {...props} onSubmit={bindedSubmit} onInit={bindedInit}
          succeed={succeed} failureReason={failureReason} />)
      }
    }))
  }

export default connectSubmitPage
