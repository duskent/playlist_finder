export const SUBMIT_PLAYLIST = 'SUBMIT_PLAYLIST'

export function submitPlaylist() {
  console.log('You clicked SUBMIT');
  return {
    type: SUBMIT_PLAYLIST
  }
}
