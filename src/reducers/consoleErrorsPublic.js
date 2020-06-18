const consoleErrorsPublicReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PUBLIC_ERROR':
      return [
        ...state,
        action.consoleErrorPublic
      ]
    case 'SET_PUBLIC_ERRORS':
      return action.consoleErrorsPublic
    default:
      return state // forgott to put default state, reducer returns undefined if no items in state array
  }
}

export default consoleErrorsPublicReducer