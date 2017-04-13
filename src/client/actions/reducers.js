import {combineReducers} from 'redux';
import PlaylistInputReducer from './PlaylistInput/playlist-input-reducer'

const Reducers = combineReducers({
  plalistInput: PlaylistInputReducer
});

export default Reducers;
