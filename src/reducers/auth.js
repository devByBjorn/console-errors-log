/* 
  "Reducers specify how the application's state changes in response to actions sent to the store. Remember that actions only describe what happened, but don't describe how the application's state changes."
  - https://redux.js.org/basics/reducers -

  LOGIN
  When action type LOGIN is triggered it will return a uid wich is passed to state 
  hold by the authReducer. 

  LOGOUT
  When action type LOGOUT is trigger it will clear the state, returning an empty object.  
*/

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        uid: action.uid
      }
    case 'LOGOUT':
      return {}
    default:
      return state
  }
}

export default authReducer

