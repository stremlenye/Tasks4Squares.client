import React, { PropTypes } from 'react'
import { secure } from 'decorators'
import {
  AppBar, Paper, FlatButton
} from 'material-ui'
import TasksList from './tasks-list'
import { fetchTasks } from 'actions/tasks'
import { signout } from 'actions/user'

import NewTask from './new-task'
import EditTask from './edit-task'

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

  showNewTaskDialog (priority) {
    this.setState({
      newTask: { priority }
    })
  }

  showEditTaskDialog ({ id, text, priority }) {
    this.setState({
      editTask: { id, text, priority }
    })
  }

  onDialogClose () {
    this.setState({
      newTask: undefined,
      editTask: undefined
    })
  }

  render () {
    const { state: { newTask, editTask } } = this
    return (
      <Paper>
        <AppBar title="Tasks4Squares"
          iconElementRight={<FlatButton label="Logout"
            onClick={::this.onLogout} />} />
          <Paper className="tasks-view">
          <TasksList onAdd={::this.showNewTaskDialog}
            onEdit={::this.showEditTaskDialog} />
        </Paper>
        {newTask ? <NewTask priority={newTask.priority}
          onDismiss={::this.onDialogClose}/> : null}
        {editTask ? <EditTask id={editTask.id} text={editTask.text}
          priority={editTask.priority}
          onDismiss={::this.onDialogClose}/> : null}
      </Paper>)
  }
}

export default Tasks
