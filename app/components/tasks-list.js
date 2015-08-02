import React, { PropTypes } from 'react'
import { Paper } from 'material-ui'
import { connect } from 'react-redux'
import TaskGroup from './tasks-group'

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
    tasks: PropTypes.array.isRequired,
    onAdd: PropTypes.func.isRequired
  }

  splitIntoGroups (tasks) {
    return Object.entries(priorities).reduce((groups, [pr, name]) => {
      const p = parseInt(pr)
      const group = tasks.filter(({ priority }) => p === priority)
      groups[name] = {
        tasks: group,
        priority: p
      }
      return groups
    }, {})
  }

  renderGroups (groups) {
    return Object.entries(groups).map(([title, { priority, tasks }]) => (
      <Paper key={title}>
        <TaskGroup title={title} tasks={tasks}
          priority={priority} onAdd={this.props.onAdd} />
      </Paper>
    ))
  }

  render () {
    const { props: { tasks } } = this
    const groups = this.splitIntoGroups(tasks)
    return (
      <Paper>
        {this.renderGroups(groups)}
      </Paper>
    )
  }
}

export default TasksList
