import React, { PropTypes } from 'react'
import { FlatButton } from 'material-ui'

class LinkButton extends React.Component {

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  static propTypes = {
    href: PropTypes.string.isRequired
  }

  transition (event) {
    event.preventDefault()
    const {
      context: { router: { transitionTo } },
      props: { href }
    } = this
    transitionTo(href)
  }

  render () {
    return (<FlatButton {...this.props}
      onClick={::this.transition} />)
  }
}

export default LinkButton
