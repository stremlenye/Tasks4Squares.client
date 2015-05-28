import _ from 'lodash'
import React from 'react'
import autobind from 'autobind-decorator'

class TaskForm extends React.Component {

  componentWillMount () {
    this.setState({
      text: this.props.text,
      isValid: this.props.text ? this.isTextValid(this.props.text) : null
    })
  }

  static propTypes = {
    text: React.PropTypes.string,
    onSubmit: React.PropTypes.func.isRequired
  }

  @autobind
  handleSubmit (priority, event) {
    event.preventDefault()
    event.stopPropagation()

    const text = this.refs.text.getDOMNode().value.trim()
    if (!this.isTextValid(text)) {
      return
    }
    this.props.onSubmit(priority, text)
    this.clearState()
  }

  clearState () {
    this.setState({
      isValid: null
    }, () => {
      this.refs.text.getDOMNode().value = ''
    })
  }

  isTextValid (textSample) {
    const text = textSample.trim()
    if (text.length === 0) {
      return null
    }
    let isValid = true
    isValid = text.length > 0 && isValid
    isValid = text.length < 500 && isValid
    return isValid
  }

  onTextChanged (event) {
    const text = event.target.value
    this.setState({
      isValid: this.isTextValid(text),
      text
    })
  }

  render () {
    const getStateClass = () => {
      return this.state.isValid === null ?
       '' :
      ' ' + (this.state.isValid ? 'has-success' : 'has-error')
    }

    const text = this.state.text
    return (
      <form {...this.props} role="form">
        <div className={'form-group' + getStateClass.bind(this)()}>
          <input name="text" type="text" className="form-control" ref="text"
            value={text}
            onChange={this.onTextChanged} placeholder="Task text" />
        </div>
        {_.map(_.range(1, 5), item => {
          return (
            <button key={item} onClick={this.handleSubmit.bind(this, item)}
              disabled={this.state.isValid}>
              {item}
            </button>)
        }, this)}
      </form>
    )
  }
}

export default TaskForm
