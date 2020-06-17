import React, { Fragment } from "react"
import { useSelector } from 'react-redux'
import { Route, Redirect } from "react-router-dom"

export const PrivateRoute = ({ component: Component, ...restOfprops }) => {
  const isAuthenticated = useSelector(state => !!state.auth.uid)

  return (
    <Route {...restOfprops} component={(props) => (
      isAuthenticated
        ? (
          <Component {...props} />
        )
        : (
          <Redirect to="/" />
        )
    )} />
  )
}

export default PrivateRoute
