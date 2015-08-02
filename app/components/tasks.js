import React, { PropTypes } from 'react'
import { secure } from 'decorators'
import {
  AppBar, Paper, FlatButton
} from 'material-ui'
import TasksList from './tasks-list'
import { fetchTasks } from 'actions/tasks'
import { signout } from 'actions/user'

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

  onLogout () {
    const { context: { store: { dispatch } } } = this
    dispatch(signout())
  }

  render () {
    return (
      <Paper>
        <AppBar title="Tasks4Squares"
          iconElementRight={<FlatButton label="Logout"
            onClick={::this.onLogout} />} />
          <Paper className="tasks-view">
          <TasksList />
        </Paper>
      </Paper>)
  }
}

export default Tasks
