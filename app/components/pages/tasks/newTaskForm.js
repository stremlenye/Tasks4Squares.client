import React from 'react'
import TaskForm from './taskForm'
import tasksActions from 'actions'

class NewTaskForm extends React.Component {

  handleSubmit (priority, text) {
    tasksActions.add(text, priority)
  }

  render () {
    return (
      <TaskForm {...this.props} onSubmit={this.handleSubmit} />
    )
  }
}

export default NewTaskForm
