import _ from 'lodash'
import React from 'react'
import Task from './task'
import EditTaskForm from './editTaskForm'

class Square extends React.Component {

  constructor () {
    super()
    this.state = {
       taskForEditId: null
    }
  }

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    tasks: React.PropTypes.array
  }

  onTaskClicked (task) {
    this.setState({
      taskForEditId: task.id
    })
  }

  onTaskUpdate () {
    this.setState({
      taskForEditId: null
    })
  }

  render () {
    return (
      <div {...this.props}>
        <h2>{this.props.title}</h2>
        {_.map(this.props.tasks, (task, index) => {
          if (task.id === this.state.taskForEditId)
            return (
              <EditTaskForm key={task.id}
                task={task} onSubmit={this.onTaskUpdate} />
              )

          return (<Task key={index} className="badge" task={task}
            onClick={this.onTaskClicked.bind(this, task)} />)
        }, this)}
      </div>
    )
  }
}

export default Square
