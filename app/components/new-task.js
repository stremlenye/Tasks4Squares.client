import React, { PropTypes } from 'react'
import { connectSubmitForm } from 'decorators'
import { createTask } from 'actions/tasks'
import EditTaskDialog from './edit-task-dialog'

@connectSubmitForm(createTask)
class NewTask extends React.Component {

  static propTypes = {
    priority: PropTypes.number.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onDismiss: PropTypes.func
  }

  onSubmit (text) {
    const { props: { onSubmit, priority } } = this
    onSubmit(text, priority)
  }

  render () {
    const { props: { priority, onDismiss } } = this
    return (
      <EditTaskDialog title="New task" priority={priority}
       onSubmit={::this.onSubmit} onDismiss={onDismiss} />
    )
  }
}

export default NewTask
