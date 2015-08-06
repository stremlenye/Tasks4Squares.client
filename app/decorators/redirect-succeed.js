import React, { PropTypes } from 'react'
import redirect from './redirect' //eslint-disable-line

export default function redirectOnSucceed (path) { //eslint-disable-line
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
