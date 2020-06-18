const consoleErrorsReducer = (state = [], action) => {
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
    case 'DELETE_CONSOLE_ERROR':
      return state.filter(consoleError => consoleError.id !== action.id)
    case 'SET_CONSOLE_ERRORS':
      return action.consoleErrors
    default:
      return state
  }
}

export default consoleErrorsReducer