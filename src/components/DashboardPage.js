import React from 'react'
import { NavLink } from 'react-router-dom'
import ErrorsShallowPostList from './ErrorsShallowPostList'

const DashboardPage = () => (
  <>
    <div>Dashboard Page</div>
    <NavLink to="/add">Add Error</NavLink>
    <input type="text" placeholder="search errors" />
    <ErrorsShallowPostList />
  </>
)

export default DashboardPage