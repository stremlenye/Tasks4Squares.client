import 'babel/polyfill'
import '../style/style.less'
import React from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Root from './root'

injectTapEventPlugin()

React.render(<Root />, document.body)
