const initialState = []

const consoleErrorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CONSOLE_ERROR':
      return [
        ...state,
        action.consoleError
      ]
    case 'EDIT_CONSOLE_ERROR':
      return state.map(consoleError =>
        consoleError.id === action.id
          ? { ...consoleError, ...action.updates }
          : consoleError
      )
    case 'SET_CONSOLE_ERRORS':
      return action.consoleErrors
    default:
      return state
  }
}

export default consoleErrorsReducer