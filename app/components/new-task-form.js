import React, { PropTypes } from 'react'
import {
  TextField, FlatButton, RadioButtonGroup, RadioButton, Paper
} from 'material-ui'
import { connectSubmitForm } from 'decorators'
import { createTask } from 'actions/tasks'

@connectSubmitForm(createTask)
class NewTaskForm extends React.Component {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  onFieldChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSelected (event, selected) {
    this.setState({
      priority: selected
    })
  }

  onSubmit (event) {
    event.preventDefault()
    event.stopPropagation()
    const {
      props: { onSubmit },
      state: { task, priority }
    } = this
    onSubmit(task, priority)
  }

  render () {
    return (
      <Paper >
        <TextField name="task" type="text" floatingLabelText="Task text"
          hintText="What you need to figure out?"
          onChange={::this.onFieldChange} />
        <RadioButtonGroup name="priority" onChange={::this.onSelected}>
          {[1, 2, 3, 4].map(squareid => (
            <RadioButton value={squareid} label={squareid} key={squareid} />
          ))}
        </RadioButtonGroup>
        <FlatButton label="Submit" primary={true} onClick={::this.onSubmit}/>
      </Paper>
    )
  }
}

export default NewTaskForm
