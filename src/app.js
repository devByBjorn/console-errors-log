import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter, { history } from './routers/AppRouter'
import configureStore from './store/configureStore'
import { login, logout } from './actions/auth'
import { firebase } from './firebase/firebase'
import { setConsoleErrorsFromFirebase } from './actions/consoleErrors'
// {startSetBlogPosts} from './actions/blogPosts'

/* 
  store
  We have imported configureStore() fro m configureStore.js. The functions returns our store, holder of the app state tree, and makes 
  it possible for us to access the different part of our state all over out app. We create a variable called "store" and assign i the 
  configureStore() function. 

  Provider
  The Provider component from react redux makes it possible to share the state all over the app. The Provider is wrapped around our 
  AppRouter and we assign the prop store the variable we created above - https://react-redux.js.org/api/provider -

*/

// store - holds the apps state tree
const store = configureStore()

console.log(store.getState())

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

// When the component in our AppRouter is succesfully renderd it appears on the screen
// Here we have created an function renderApp, and a variable appRendered to toogle the 
// rendering of the app. This is done in firebase authantication process below
let appRendered = false
const renderApp = () => {
  if (!appRendered) {
    ReactDOM.render(jsx, document.getElementById('app'))
    appRendered = true
  }
}

// When wating for the component i our AppRouter to render the loading page appears on the screen
ReactDOM.render('...loading', document.getElementById('app'))




// Firebase authentication
/* Here we use the store props dispatch. "This is the only way to trigger state change". 
    The state change in this case being if the the user is loged in or loged out. Depending on
    state the user is directed to either dashboard page (if loged in) or login page(if loged out
*/
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    //store.dispatch(startSetBlogPosts) - ett promise som efter ha körts(then), kör renderApp och if statement nedanför
    store.dispatch(login(user.uid))
    store.dispatch(setConsoleErrorsFromFirebase()).then(() => {
      renderApp()
      if (history.location.pathname === '/') {
        history.push('/dashboard')
      }
    })
  } else {
    store.dispatch(logout())
    renderApp()
    history.push('/')
  }
})

/*
  history
  Se how we use the manually created history in the AppRouter file to be able to acces the history and
  redirect the user to the pages we want.
*/