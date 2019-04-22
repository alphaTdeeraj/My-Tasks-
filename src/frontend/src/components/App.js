import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'


import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic';

import TaskList from './tasks/TaskList'

import NavBar from './layouts/NavBar';
import Alerts from './layouts/Alerts'

import store from '../store';


const alertOptions = {
  position: 'top center',
  timeout: 3000,
}



export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <div className='container-fluid'>
            <Alerts />
            <div className="row">
              <div className='col-12 mb-0'>
                <NavBar />
              </div>
              <div className='col-12 mt-0'>
                <TaskList />
              </div>

            </div>
          </div>
        </AlertProvider>
      </Provider>
    )
  }
}

export default App
ReactDOM.render(<App />, document.getElementById('app'))