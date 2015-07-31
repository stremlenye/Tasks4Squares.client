import React, { PropTypes } from 'react'
import { secure } from 'decorators'
import { AppBar, Paper } from 'material-ui'
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
      <Paper>
        <AppBar title="Tasks4Squares" />
        <Paper>
          <NewTaskForm />
        </Paper>
        <Paper>
          <TasksList />
        </Paper>
      </Paper>)
  }
}

export default Tasks
