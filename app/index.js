import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {configureStore} from './config/configureStore'
import {MainNav} from './config/routes'

const {store} = configureStore()

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainNav />
      </Provider>
    )
  }
}
