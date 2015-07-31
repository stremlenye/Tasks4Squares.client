import React from 'react'
import { secure } from 'utils'
import NewTaskForm from './new-task-form'
import TasksList from './tasks-list'

@secure
class Tasks extends React.Component {
  render () {
    return (
      <div>
        <NewTaskForm />
        <TasksList />
      </div>)
  }
}

export default Tasks
