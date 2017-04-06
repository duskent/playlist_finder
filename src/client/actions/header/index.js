export const CLICK_HEADER = 'CLICK_HEADER'

export function clickHeader() {
  console.log('You clicked Header');
  return {
    type: CLICK_HEADER
  }
}
