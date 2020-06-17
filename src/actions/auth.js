/*
    Actions for authentication with Firebase

    "Actions are plain JavaScript objects. Actions must have a type property that indicates the type of action being performed. Types should typically be defined as string constants."
 - https://redux.js.org/basics/actions -

*/

import { firebase, googleAuthProvider } from '../firebase/firebase'

const login = (uid) => ({
    type: 'LOGIN',
    uid
})

const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider)
    }
}

const logout = () => ({
    type: 'LOGOUT'
})

const startLogout = () => {
    return () => {
        return firebase.auth().signOut()
    }
}


export { login, startLogin, logout, startLogout }


