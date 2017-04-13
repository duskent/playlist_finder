import {SUBMIT_PLAYLIST} from './index'

const INITIAL_STATE = { submitPlaylist: false };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SUBMIT_PLAYLIST:
      return { ...state, submitPlaylist: true }
    default:
      return state;
  }
}
