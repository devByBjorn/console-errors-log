import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout, startLogin } from '../actions/auth'
import { NavLink } from 'react-router-dom'

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
      {isAuthenticated && <NavLink to="/dashboard">Dashboard</NavLink>}
      <button
        data-testid="logout"
        onClick={onClick}
      >{isAuthenticated ? 'logout' : 'login'}
      </button>
    </div>
  )
}

export default Header
