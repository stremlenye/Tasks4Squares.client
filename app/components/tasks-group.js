import React, { PropTypes } from 'react'
import {
  Paper,
  List,
  FloatingActionButton,
  FontIcon,
  Toolbar,
  ToolbarTitle,
  ToolbarGroup
} from 'material-ui'
import Task from './task'

const addButtonStyle = {
  'margin-top': '-28px',
  'margin-right': '28px'
}

class TasksGroup extends React.Component {

  static propTypes = {
    tasks: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    priority: PropTypes.number.isRequired,
    onAdd: PropTypes.func.isRequired,
    color: PropTypes.string.isRequired
  }

  onAdd () {
    const { props: { onAdd, priority } } = this
    onAdd(priority)
  }

  render () {
    const { props: { tasks, title, color } } = this
    return (
      <Paper className="tasks-group">
        <Toolbar style={{'background-color': color}}>
          <ToolbarGroup float="left">
            <ToolbarTitle text={title}/>
          </ToolbarGroup>
          <ToolbarGroup float="right">
            <FloatingActionButton onClick={::this.onAdd} style={addButtonStyle}>
              <FontIcon className="material-icons">add</FontIcon>
            </FloatingActionButton>
          </ToolbarGroup>
        </Toolbar>
        <List className="list">
          {tasks.map((task, index) => (
            <Task key={index} task={task} />
          ))}
        </List>
      </Paper>
    )
  }
}

export default TasksGroup
