import React, { PropTypes } from 'react'
import { List } from 'material-ui'
import Task from './task'

class TasksGroup extends React.Component {

  static propTypes = {
    tasks: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    onTaskClick: PropTypes.func.isRequired
  }

  render () {
    const { props: { tasks, title, onTaskClick } } = this
    return (
      <List subheader={title}>
        {tasks.map((task, index) => (
          <Task key={index} task={task} onClick={onTaskClick} />
        ))}
      </List>
    )
  }
}

export default TasksGroup
