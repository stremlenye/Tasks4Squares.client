/* eslint-disable no-console */

export function log (/* { dispatch, getState } */) {
  return next => action => {
    console.log(action)
    return next(action)
  }
}
