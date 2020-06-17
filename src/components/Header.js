import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout, startLogin } from '../actions/auth'
import { NavLink } from 'react-router-dom'

/* useDispatch Hook - https://react-redux.js.org/api/hooks - 
  If you have used Redux before useDispatch is sort of like mapsDispatchToProps. Not the same though. Read documentation.

  logout
  Here we have the logout button. On click this button triggers the startLogut out action
  in the auth action file. Logs out the user from the app. 
*/

const Header = () => {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector(state => !!state.auth.uid)

  const onClick = () =>
    isAuthenticated
      ? dispatch(startLogout())
      : dispatch(startLogin())

  return (
    <div>
      <h1 data-testid="main-heading">Errors in the console</h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to={isAuthenticated ? "/add" : "/login"}>Add Error</NavLink>
      <button
        data-testid="logout"
        onClick={onClick}
      >{isAuthenticated ? 'logout' : 'login'}
      </button>
    </div>
  )
}

export default Header
