/* signOutButton
* Element, on click signing out current user&
*/

import React from 'react'
import {authActions} from 'actions'

class SignOutButton extends React.Component {

  signOut () {
    authActions.signOut()
  }

  render () {
    return (
      <button {...this.props} onClick={this.signOut}>Sign out</button>
    )
  }
}

export default SignOutButton
