import React from 'react'

class Forbidden extends React.Component{

  render () {
    return (
        <div className="container-fluid">
          <div className="alert alert-info col-lg-6 col-lg-offset-3">
            <h3>
              Forbidden
            </h3>
            <span>
              You arent allowed to be here. Please use another
                <a href="/#" className="alert-link">doors</a> :)
            </span>
          </div>
        </div>
    )
  }
}

export default Forbidden
