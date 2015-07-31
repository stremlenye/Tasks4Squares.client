import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Task from './task'

@connect(state => state.tasks)
class TasksList extends React.Component {

  static propTypes = {
    tasks: PropTypes.array.isRequired
  }

  render () {
    const { props: { tasks } } = this
    return (
      <div>
        {tasks.map((task, index) => (
          <Task key={index} task={task} />
        ))}
      </div>
    )
  }
}

export default TasksList
