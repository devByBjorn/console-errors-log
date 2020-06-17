import React from 'react'
import { useDispatch } from 'react-redux'
import { startLogin } from '../actions/auth'

const LoginPage = () => {
  const dispatch = useDispatch()
  return (
    <button
      data-testid="login"
      onClick={() => dispatch(startLogin())}>Login</button>
  )
}

export default LoginPage