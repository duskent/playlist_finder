import React, { Component } from 'react'
import {Grid, Button, Col} from 'react-bootstrap'
import Textarea from 'react-textarea-autosize'

class PlaylistInput extends Component {
  render() {
    return (
      <Grid>
        <Col xs={12} md={8} mdOffset={2}>
          <form>
            <div className="form-group">
              <Textarea className="form-control" rows={7}/>
            </div>
          </form>
          <Button
            className="btn btn-primary"
            id="search-button"
            type="submit"
            onClick={this.props.submitPlaylist}>
            Search Playlist
          </Button>
        </Col>
      </Grid>
    )
  }
}

export default PlaylistInput
