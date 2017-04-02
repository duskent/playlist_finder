import React, {Component} from 'react'
import reactDOM from 'react-dom'
import '../styles/main.scss'

class App extends Component {
  render() {
    return (
      <div>
        <h1>
          Hello World
        </h1>
      </div>
    )
  }
}

reactDOM.render(
  <App />,
  document.getElementById('root')
)
