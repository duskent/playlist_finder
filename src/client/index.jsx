import React, {Component} from 'react'
import reactDOM from 'react-dom'
import {Grid, PageHeader} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/main.scss'

class App extends Component {
  render() {
    return (
      <Grid>
        <PageHeader>
          Hello World
        </PageHeader>
      </Grid>
    )
  }
}

reactDOM.render(
  <App />,
  document.getElementById('root')
)
