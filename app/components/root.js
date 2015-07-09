import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'redux/react'
import * as reducers from 'reducers'
import Application from 'components/application'

const store = createStore(reducers)

class Root extends React.Component {
  render () {
    return (
      <Provider store={store} >
        <Application />
      </Provider>
    )
  }
}

export default Root
