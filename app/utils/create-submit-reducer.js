import createReducer from './create-reducer'

export default function createSubmitReducer (
  initType, succeedType, failedType) {
    const initialState = {}

    const actionsMap = {
      [initType]: () => initialState,
      [succeedType]: () => ({ succeed: true }),
      [failedType]: (state, { error: failureReason }) =>
({ succeed: false, failureReason })
    }

    return createReducer(initialState, actionsMap, (state, reduced) => reduced)
  }
