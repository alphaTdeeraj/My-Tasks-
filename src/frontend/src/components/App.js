import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import TaskList from './tasks/TaskList'
import store from '../store';

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TaskList />
      </Provider>
    )
  }
}

export default App
ReactDOM.render(<App />, document.getElementById('app'))