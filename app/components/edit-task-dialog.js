import React, { PropTypes } from 'react'
import { Dialog, TextField, RadioButtonGroup, RadioButton } from 'material-ui'
import { connectSubmitForm } from 'decorators'
import { updateTask } from 'actions/tasks'

@connectSubmitForm(updateTask)
class EditTaskDialog extends React.Component {

  static propTypes = {
    task: PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      priority: PropTypes.number.isRequired
    }).isRequired,
    onSubmit: PropTypes.func.isRequired
  }

  onSubmit () {
    const {
      props: { onSubmit, task: { id } },
      state: { text, priority }
    } = this
    onSubmit(id, text, priority)
  }

  standardActions = [
    { text: 'Cancel' },
    { text: 'Submit', onTouchTap: this.onSubmit, ref: 'submit' }
  ];

  render () {
    const { props: { task: { text, priority } } } = this
    return (
      <Dialog {...this.props} title="Edit task"
        actions={this.standardActions}
        actionFocus="submit"
        modal={true}>
        <TextField name="text" type="text" floatingLabelText="Task text"
          hintText="What you need to figure out?" defaultValue={text}
          onChange={::this.onFieldChange} />
        <RadioButtonGroup name="priority" onChange={::this.onSelected}
          defaultSelected={priority}>
          {[1, 2, 3, 4].map(squareid => (
            <RadioButton value={squareid} label={squareid} key={squareid} />
          ))}
        </RadioButtonGroup>
      </Dialog>
    )
  }
}

export default EditTaskDialog
