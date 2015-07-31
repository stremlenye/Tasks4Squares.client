import React, { PropTypes } from 'react'
import { Paper, ListDivider } from 'material-ui'
import { connect } from 'react-redux'
import TaskGroup from './tasks-group'
import EditTaskDialog from './edit-task-dialog'

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

  render () {
    const { props: { tasks }, state: { editTask } } = this
    const firstPriority = tasks.filter(({ priority }) => priority === 1)
    const secondPriority = tasks.filter(({ priority }) => priority === 2)
    const thirdPriority = tasks.filter(({ priority }) => priority === 3)
    const fourthPriority = tasks.filter(({ priority }) => priority === 4)
    return (
      <Paper>
        <TaskGroup title="Red" tasks={firstPriority}
          onTaskClick={::this.onTaskClick} />
        <ListDivider />
        <TaskGroup title="Yellow" tasks={secondPriority}
          onTaskClick={::this.onTaskClick} />
        <ListDivider />
        <TaskGroup title="Green" tasks={thirdPriority}
          onTaskClick={::this.onTaskClick} />
        <ListDivider />
        <TaskGroup title="Blue" tasks={fourthPriority}
          onTaskClick={::this.onTaskClick} />
        {editTask ? <EditTaskDialog task={editTask}
          onDismiss={::this.onDialogClose} /> : null}
      </Paper>
    )
  }
}

export default TasksList
