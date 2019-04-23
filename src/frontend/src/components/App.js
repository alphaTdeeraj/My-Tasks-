import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic';

import TaskList from './tasks/TaskList'

import NavBar from './layouts/NavBar';
import Alerts from './layouts/Alerts'

import store from '../store';
import { TaskForm } from './tasks/TaskForm';


const alertOptions = {
  position: 'top center',
  timeout: 3000,
}




export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <BrowserRouter>
            <div className='container-fluid'>
              <Route path='/' component={NavBar}></Route>
              <Route exact path='/' component={TaskList}></Route>
              <Route path='/' component={Alerts}></Route>
              <Route exact path='/add-task/' component={TaskForm}></Route>
            </div>
          </BrowserRouter>
        </AlertProvider>
      </Provider>
    )
  }
}

export default App
ReactDOM.render(<App />, document.getElementById('app'))