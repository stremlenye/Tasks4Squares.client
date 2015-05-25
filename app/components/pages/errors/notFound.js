import React from 'react'

class NotFound extends React.Component {

  render () {
    return (
        <div className="container-fluid">
          <div className="alert alert-info col-lg-6 col-lg-offset-3">
            <h3>
              Page not found
            </h3>
            <span>
              Page you are looking for seems some where near.
              Please use another
              <a href="/#" className="alert-link">doors</a> :)
            </span>
          </div>
        </div>
    )
  }

}

export default NotFound
