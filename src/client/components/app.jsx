import React, { Component } from 'react'
import {Grid, Button, Col, Well, PageHeader, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
import Textarea from 'react-textarea-autosize'
import 'bootstrap/dist/css/bootstrap.css'
import './main.scss'

class App extends Component {
  render() {
    return (
      <Grid>
        <Well>
          <PageHeader className="center" onClick={this.props.clickHeader}>
            PlaylstFinder - Find songs from you playlists!
          </PageHeader>
          <h2 className="center">
            <small>Just insert text into box below</small>
          </h2>
        </Well>
        <Well>
          <Grid>
            <Col xs={12} md={8} mdOffset={2}>
              <form>
                <div className="form-group">
                  <Textarea className="form-control" rows="5" />
                </div>
              </form>
              <Button className="btn btn-primary" id="search-button" type="submit">
                Search Playlist
              </Button>
            </Col>
          </Grid>
        </Well>
      </Grid>
    )
  }
}

export default App
