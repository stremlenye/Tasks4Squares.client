import React, { PropTypes } from 'react'
import { connectSubmitForm } from 'decorators'
import { updateTask } from 'actions/tasks'
import EditTaskDialog from './edit-task-dialog'

@connectSubmitForm(updateTask)
class EditTask extends React.Component {

  static propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    priority: PropTypes.number.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onDismiss: PropTypes.func
  }

  onSubmit (text) {
    const { props: { onSubmit, id, priority } } = this
    onSubmit(id, text, priority)
  }

  render () {
    const { props: { text, onDismiss } } = this
    return (
      <EditTaskDialog title="Edit task" text={text}
       onSubmit={::this.onSubmit} onDismiss={onDismiss} />
    )
  }
}

export default EditTask
