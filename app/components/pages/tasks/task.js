import React from 'react'
import tasksActions from 'actions'

class Task extends React.Component {

  static propTypes = {
    task: React.PropTypes.shape({
      id: React.PropTypes.string.isRequired,
      text: React.PropTypes.string.isRequired
    }).isRequired
  }

  onTaskFinished (event) {
    event.stopPropagation()
    event.preventDefault()
    tasksActions.delete(this.props.task.id)
  }

  render () {
    return (
      <span {...this.props}>
        {this.props.task.text}
        <span aria-hidden="true" onClick={this.onTaskFinished}></span>
      </span>
    )
  }
}

export default Task
