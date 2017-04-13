import React, { Component } from 'react'
import {Grid, Well, PageHeader} from 'react-bootstrap'

class Header extends Component {
  render() {
    return (
      <Well>
        <PageHeader className="center">
          PlaylstFinder - Find songs from you playlists!
        </PageHeader>
        <h2 className="center">
          <small>Just insert text into box below</small>
        </h2>
      </Well>
    )
  }
}

export default Header
