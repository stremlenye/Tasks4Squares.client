import React, { PropTypes } from 'react'
import { Paper } from 'material-ui'
import { connect } from 'react-redux'
import TaskGroup from './tasks-group'
import EditTaskDialog from './edit-task-dialog'

const priorities = {
  [1]: 'Red',
  [2]: 'Yellow',
  [3]: 'Green',
  [4]: 'Blue'
}

@connect(state => state.tasks)
class TasksList extends React.Component {
  constructor () {
    super()
    this.state = {}
  }

  static propTypes = {
    tasks: PropTypes.array.isRequired
  }

  onTaskClick (editTask) {
    this.setState({
      editTask
    })
  }

  onDialogClose () {
    this.setState({
      editTask: undefined
    })
  }

  splitIntoGroups (tasks) {
    return Object.entries(priorities).reduce((groups, [pr, name]) => {
      const p = parseInt(pr)
      groups[name] = tasks.filter(({ priority }) => p === priority)
      return groups
    }, {})
  }

  renderGroups (groups) {
    return Object.entries(groups).map(([title, tasks]) => (
      <Paper>
        <TaskGroup title={title} tasks={tasks}
          onTaskClick={::this.onTaskClick} />
      </Paper>
    ))
  }

  render () {
    const { props: { tasks }, state: { editTask } } = this
    const groups = this.splitIntoGroups(tasks)
    return (
      <Paper>
        {this.renderGroups(groups)}
        {editTask ? <EditTaskDialog task={editTask}
          onDismiss={::this.onDialogClose} /> : null}
      </Paper>
    )
  }
}

export default TasksList
