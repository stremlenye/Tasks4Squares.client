import React, { PropTypes } from 'react'
import redirect from './redirect'

export default function redirectOnSucceed (path) {
  return Component =>
    @redirect(path, ({ succeed }) => succeed)
    class Composed extends React.Component {

      static propTypes = {
        succeed: PropTypes.bool
      }

      render () {
        return <Component {...this.props}/>
      }
    }
}
