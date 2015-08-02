import React, { PropTypes } from 'react'
import {
  Paper,
  List,
  FloatingActionButton,
  FontIcon
} from 'material-ui'
import Task from './task'

const addButtonStyle = {
  float: 'right',
  'margin-top': '-28px',
  'margin-right': '28px'
}

class TasksGroup extends React.Component {

  static propTypes = {
    tasks: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    priority: PropTypes.number.isRequired,
    onAdd: PropTypes.func.isRequired
  }

  onAdd () {
    const { props: { onAdd, priority } } = this
    onAdd(priority)
  }

  render () {
    const { props: { tasks, title } } = this
    return (
      <Paper className="tasks-group">
        <FloatingActionButton style={addButtonStyle} onClick={::this.onAdd}>
          <FontIcon className="material-icons">add</FontIcon>
        </FloatingActionButton>
        <List subheader={title}>
          {tasks.map((task, index) => (
            <Task key={index} task={task} />
          ))}
        </List>
      </Paper>
    )
  }
}

export default TasksGroup
