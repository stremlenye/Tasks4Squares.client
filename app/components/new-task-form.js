import React, { PropTypes } from 'react'

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
    const { onButtonPress, onFieldChange, onSubmit } = this
    return (
      <form onChange={onFieldChange} onSubmit={onSubmit}>
        <input name="task" type="text"
          placeholder="What you need to figure out?" />
        {[1, 2, 3, 4].map(squareid => (
          <button type="button" value={squareid} key={squareid}
            onClick={onButtonPress}>
            {squareid}
          </button>))}
      </form>
    )
  }
}

export default NewTaskForm
