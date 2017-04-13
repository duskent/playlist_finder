import React, { Component } from 'react'
import {Grid} from 'react-bootstrap'
import PlaylistInput from '../containers/PlaylistInput'
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.css'
import './main.scss'

class App extends Component {
  render() {
    return (
      <Grid>
        <Header />
        <PlaylistInput />
      </Grid>
    )
  }
}

export default App
