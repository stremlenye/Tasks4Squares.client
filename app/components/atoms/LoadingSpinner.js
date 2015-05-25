import React from'react'

class LoadingSpinner extends React.Component {

  render () {
    return (
      // TODO: relace with css
      <img {...this.props} src="../../../style/images/loader.gif" />
    )
  }

}

export default LoadingSpinner
