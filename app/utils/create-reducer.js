/**
 * Creates reducer
 * @param {Object} initialState - reducers initial state
 * @param {Object} actionsMap - actions map
 * @returns {reducerFunction} - reducer function
 */
export default function createReducer (
  initialState, actionsMap,
  reduceState = (state, reduced) => ({ ...state, ...reduced })) {
    return (state = initialState, { type, payload }) => {
      const reducer = actionsMap[type]
      if (!reducer) return state
      return reduceState(state, reducer(state, payload))
    }
  }
