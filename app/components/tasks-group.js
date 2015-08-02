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
    tasks: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    onTaskClick: PropTypes.func.isRequired
  }

  render () {
    const { props: { tasks, title, onTaskClick } } = this
    return (
      <Paper className="tasks-group">
        <FloatingActionButton style={addButtonStyle} >
          <FontIcon className="material-icons">add</FontIcon>
        </FloatingActionButton>
        <List subheader={title}>
          {tasks.map((task, index) => (
            <Task key={index} task={task} onClick={onTaskClick} />
          ))}
        </List>
      </Paper>
    )
  }
}

export default TasksGroup
