import React, { PropTypes } from 'react'
import { deleteTask } from 'actions/tasks'

class Task extends React.Component {

  static contextTypes = {
    store: PropTypes.shape({
      dispatch: PropTypes.func.isRequired
    }).isRequired
  }

  static propTypes = {
    task: PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      priority: PropTypes.number.isRequired
    })
  }

  onDelete (event) {
    event.preventDefault()
    event.stopPropagation()
    const {
      context: { store: { dispatch} },
      props: { task: { id } }
    } = this
    dispatch(deleteTask(id))
  }

  render () {
    const { props: { task: {id, text, priority} } } = this
    return (
      <p key={id}>
        <span>{id}</span>
        <span>{text}</span>
        <span>{priority}</span>
        <button type="button" onClick={::this.onDelete}>Delete</button>
      </p>
    )
  }
}

export default Task
