import PlaylistInput from '../../components/PlaylistInput'
import {submitPlaylist} from '../../actions/PlaylistInput'
import {connect} from 'react-redux';

function mapStateToProps(state) {
  return {
    searchPlaylist: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    submitPlaylist: () => {
      dispatch(submitPlaylist())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistInput)
