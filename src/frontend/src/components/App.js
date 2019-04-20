import React, { Component } from 'react'
import ReactDOM from 'react-dom'
export class App extends Component {
  render() {
    return (
      <div>
          <h2>this is from app component</h2>
        
      </div>
    )
  }
}

export default App
ReactDOM.render(<App />, document.getElementById('app'))