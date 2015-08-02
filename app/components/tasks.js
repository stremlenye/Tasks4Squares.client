import React, { PropTypes } from 'react'
import { secure } from 'decorators'
import {
  AppBar, Paper, FlatButton
} from 'material-ui'
import TasksList from './tasks-list'
import { fetchTasks, createTask } from 'actions/tasks'
import { signout } from 'actions/user'

import EditTaskDialog from './edit-task-dialog'

@secure
class Tasks extends React.Component {
  constructor () {
    super()
    this.state = {}
  }

  static contextTypes = {
    store: PropTypes.shape({
      dispatch: PropTypes.func.isRequired
    }).isRequired
  }

  componentDidMount () {
    const { context: { store: { dispatch } } } = this
    dispatch(fetchTasks())
  }

  onLogout () {
    const { context: { store: { dispatch } } } = this
    dispatch(signout())
  }

  onTaskCreate ({ text, priority }) {
    const { context: { store: { dispatch } } } = this
    dispatch(createTask(text, priority))
    this.setState({
      editTask: undefined
    })
  }

  showTaskDialog (priority, task) {
    this.setState({
      editTask: { priority, task }
    })
  }

  onDialogClose () {
    this.setState({
      editTask: undefined
    })
  }

  render () {
    const { state: { editTask } } = this
    return (
      <Paper>
        <AppBar title="Tasks4Squares"
          iconElementRight={<FlatButton label="Logout"
            onClick={::this.onLogout} />} />
          <Paper className="tasks-view">
          <TasksList onAdd={::this.showTaskDialog} />
        </Paper>
        {editTask ? <EditTaskDialog priority={editTask.priority}
          task={editTask.task} onSubmit={::this.onTaskCreate}
          onDismiss={::this.onDialogClose}/> : null}
      </Paper>)
  }
}

export default Tasks
