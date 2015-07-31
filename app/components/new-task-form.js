import React, { PropTypes } from 'react'
import { connectSubmitPage } from 'utils'
import { createTask } from 'actions/tasks'

class NewTaskForm extends React.Component {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  onFieldChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onButtonPress (event) {
    this.setState({
      square: event.target.value
    })
  }

  onSubmit (event) {
    event.preventDefault()
    event.stopPropagation()
    const {
      props: { onSubmit },
      state: { task, square }
    } = this
    onSubmit(task, square)
  }

  render () {
    return (
      <form onChange={::this.onFieldChange} onSubmit={::this.onSubmit}>
        <input name="task" type="text"
          placeholder="What you need to figure out?" />
        {[1, 2, 3, 4].map(squareid => (
          <button type="button" value={squareid} key={squareid}
            onClick={::this.onButtonPress}>
            {squareid}
          </button>))}
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default connectSubmitPage(NewTaskForm, createTask)
