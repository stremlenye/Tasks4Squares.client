import _ from 'lodash'
import React from 'react'
import {tasksStore} from 'stores'
import Square from './square'

function filter (priority, task) {
  return task.priority === priority
}

class SquaresLayout extends React.Component {

  constructor () {
    super()
    this.state = {
      tasks: tasksStore.get()
    }
  }

  onChange () {
    this.setState({
      tasks: tasksStore.get()
    })
  }

  componentDidMount () {
    tasksStore.subscribe(this.onChange)
  }

  componentWillUnmount () {
    tasksStore.unsubscribe(this.onChange)
  }

  render () {
    return (
      <div {...this.props}>
        <div className="row">
          <Square tasks={_.filter(this.state.tasks, filter.bind(this, 1))}
            title={"Urgent and important"}
            className="col-lg-6" />
          <Square tasks={_.filter(this.state.tasks, filter.bind(this, 2))}
            title={"Urgent and not important"}
            className="col-lg-6" />
        </div>
        <div className="row">
          <Square tasks={_.filter(this.state.tasks, filter.bind(this, 3))}
            title="Not urgent and important"
            className="col-lg-6" />
          <Square tasks={_.filter(this.state.tasks, filter.bind(this, 4))}
            title="Not urgent and not important"
            className="col-lg-6" />
        </div>
      </div>
    )
  }
}

export default SquaresLayout
