import React, { PropTypes } from 'react'
import { secure } from 'decorators'
import NewTaskForm from './new-task-form'
import TasksList from './tasks-list'
import { fetchTasks } from 'actions/tasks'

@secure
class Tasks extends React.Component {

  static contextTypes = {
    store: PropTypes.shape({
      dispatch: PropTypes.func.isRequired
    }).isRequired
  }

  componentDidMount () {
    const { context: { store: { dispatch } } } = this
    dispatch(fetchTasks())
  }

  render () {
    return (
      <div>
        <NewTaskForm />
        <TasksList />
      </div>)
  }
}

export default Tasks
