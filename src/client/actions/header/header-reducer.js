import {CLICK_HEADER} from './index'

const INITIAL_STATE = { click: false };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case CLICK_HEADER:
      return { ...state, click: true }
    default:
      return state;
  }
}
