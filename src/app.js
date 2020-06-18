import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter, { history } from './routers/AppRouter'
import configureStore from './store/configureStore'
import { login, logout } from './actions/auth'
import { firebase } from './firebase/firebase'
import { setConsoleErrorsFromFirebase } from './actions/consoleErrors'
import { setConsoleErrorsPublicFromFirebase } from './actions/consoleErrorsPublic'

const store = configureStore()

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

let appRendered = false
const renderApp = () => {
  if (!appRendered) {
    ReactDOM.render(jsx, document.getElementById('app'))
    appRendered = true
  }
}

ReactDOM.render('...loading', document.getElementById('app'))

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    //store.dispatch(startSetBlogPosts) - ett promise som efter ha körts(then), kör renderApp och if statement nedanför
    store.dispatch(login(user.uid))
    store.dispatch(setConsoleErrorsPublicFromFirebase())
    store.dispatch(setConsoleErrorsFromFirebase()).then(() => {
      renderApp()
      if (history.location.pathname === '/') {
        history.push('/dashboard')
      }
    })
  } else {
    store.dispatch(logout())
    store.dispatch(setConsoleErrorsPublicFromFirebase()).then(() => {
      renderApp()
      history.push('/')
    })
  }
})



