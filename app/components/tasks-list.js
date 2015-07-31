import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

@connect(state => state.tasks)
class TasksList extends React.Component {

  static propTypes = {
    tasks: PropTypes.array.isRequired
  }

  render () {
    const { props: { tasks } } = this
    return (
      <div>
        {tasks.map(({ id, text, priority }) => (
          <p key={id}>
            <span>{id}</span>
            <span>{text}</span>
            <span>{priority}</span>
          </p>
        ))}
      </div>
    )
  }
}

export default TasksList
