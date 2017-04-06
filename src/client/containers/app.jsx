import App from '../components/app'
import {connect} from 'react-redux';
import {clickHeader} from '../actions/header'

function mapStateToProps(state) {
  return {
    headerState: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    clickHeader: () => {
      dispatch(clickHeader())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
