import React, { PropTypes } from 'react'
import { ListItem, Checkbox } from 'material-ui'
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
    }),
    onClick: PropTypes.func.isRequired
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

  onTouched (event) {
    event.preventDefault()
    event.stopPropagation()
    const { props: { onClick, task } } = this
    onClick(task)
  }

  render () {
    const { props: { task: { text } } } = this
    return (
      <ListItem primaryText={text} onClick={::this.onTouched}
        leftCheckbox={<Checkbox onCheck={::this.onDelete}/>} />
    )
  }
}

export default Task
