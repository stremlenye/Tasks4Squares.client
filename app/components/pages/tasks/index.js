import React from 'react'
import {tasksActions} from 'actions'

import SignOutButton from 'components/molecules/signOutButton'

import NewTaskForm from './newTaskForm'
import SquaresLayout from './squaresLayout'

class Task extends React.Component {

  componentDidMount () {
    tasksActions.list()
  }

  render () {
    return (
      <div>
        <nav role="naigation" className="navbar navbar-default">
          <div className="container-fluid">
            <div className="collapse navbar-collapse">
              <NewTaskForm className="navbar-form navbar-left"/>
              <form className="navbar-form navbar-right">
                <SignOutButton type="button" className="btn btn-primary" />
              </form>
            </div>
          </div>
        </nav>
        <SquaresLayout className="container-fluid"/>
      </div>
    )
  }
}

export default Task
