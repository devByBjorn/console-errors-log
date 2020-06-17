import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducersCombined from '../reducers/reducersCombined'

/* 
  This is the store of the app. The store holds the state tree of our app. Store is an object with
  a couple of methods - https://redux.js.org/api/store -.  

  The different parts of our state is passed to the store through our cominedReducer function. The store itself is returned
  by the configureStore function - https://redux-toolkit.js.org/api/configureStore - This is the function we export to our 
  App.js file to be able to use it in our Provider that is wrapped around the whole App, making it possible to access state where ever
  we like in our app. See app.js for more on Provider. 

  //composeEnhancers
  // let us get access to the redux developer tools - https://github.com/zalmoxisus/redux-devtools-extension- 
*/

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = () => {
  const store = createStore(
    reducersCombined,
    composeEnhancers(applyMiddleware(thunk))
  )
  return store
}

export default configureStore

