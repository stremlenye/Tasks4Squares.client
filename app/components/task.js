import React, { PropTypes } from 'react'
import { ListItem, Checkbox } from 'material-ui'
import { deleteTask } from 'actions/tasks'

const checkboxStyle = {
  float: 'left',
  width: '50px'
}

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
    onEdit: PropTypes.func.isRequired
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
    const { props: { onEdit, task } } = this
    onEdit(task)
  }

  render () {
    const { props: { task: { text } } } = this
    return (
      <ListItem {...this.props} onTouchTap={::this.onTouched}>
        <Checkbox style={checkboxStyle} onCheck={::this.onDelete} />
        {text}
      </ListItem>
    )
  }
}

export default Task
