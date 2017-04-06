import {combineReducers} from 'redux';
import HeaderReducer from './header/header-reducer'

const Reducers = combineReducers({
  header: HeaderReducer
});

export default Reducers;
