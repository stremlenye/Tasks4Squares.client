import React from 'react'
import { secure } from 'utils'
import NewTaskForm from './new-task-form'

@secure
class Tasks extends React.Component {
  render () {
    return (
      <div>
        <NewTaskForm />
      </div>)
  }
}

export default Tasks
