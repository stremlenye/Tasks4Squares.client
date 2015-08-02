import React, { PropTypes } from 'react'
import { Dialog, TextField, FlatButton } from 'material-ui'

class EditTaskDialog extends React.Component {

  static propTypes = {
    task: PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    }),
    priority: PropTypes.number.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onDismiss: PropTypes.func.isRequired
  }

  onFieldChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit () {
    const {
      props: { onSubmit, priority, task },
      state: { text }
    } = this
    const id = task ? task.id : undefined
    onSubmit({id, text, priority})
  }

  onCancel () {
    const { props: { onDismiss } } = this
    onDismiss()
  }

  render () {
    return (
      <Dialog title="Edit task"
        actions={[
          <FlatButton key="cancel"
            label="Cancel"
            secondary={true}
            onClick={::this.onCancel} />,
          <FlatButton key="submit"
            label="Submit"
            primary={true}
            onClick={::this.onSubmit} />
        ]}
        actionFocus="submit"
        openImmediately={true}
        modal={true}>
        <TextField name="text" type="text" floatingLabelText="Task text"
          hintText="What you need to figure out?"
          onChange={::this.onFieldChange} />
      </Dialog>
    )
  }
}

export default EditTaskDialog
