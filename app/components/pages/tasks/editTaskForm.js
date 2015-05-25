import React from 'react'
import TaskForm from './taskForm'
import {authActions} from 'actions'

class EditTaskForm extends React.Component {

  static propTypes = {
    task: React.PropTypes.shape({
      id: React.PropTypes.string.isRequired
    }),
    onSubmit: React.PropTypes.func
  }

  handleSubmit (priority, text) {
    authActions.update(this.props.task.id, text, priority)
    if (this.props.onSubmit)
      this.props.onSubmit({
        id: this.props.task.id,
        text,
        priority
      })
  }

  render () {
    return (
      <TaskForm onSubmit={this.handleSubmit} text={this.props.task.text} />
    )
  }
}

export default EditTaskForm
