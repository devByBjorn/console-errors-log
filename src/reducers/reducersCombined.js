import { combineReducers } from 'redux'
import authReducer from './auth'
import consoleErrorsPublicReducer from './consoleErrorsPublic'
import consoleErrorsReducer from './consoleErrors'



const reducersCombined = combineReducers({
  auth: authReducer,
  consoleErrors: consoleErrorsReducer,
  consoleErrorsPublic: consoleErrorsPublicReducer,
})

export default reducersCombined