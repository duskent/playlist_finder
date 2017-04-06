import React, { Component } from 'react'
import {Grid, PageHeader} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './main.scss'

class App extends Component {
  render() {
    return (
      <Grid>
        <PageHeader onClick={this.props.clickHeader}>
          Hello World
        </PageHeader>
      </Grid>
    )
  }
}

export default App
