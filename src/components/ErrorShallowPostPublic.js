import React from 'react'
import { Link } from 'react-router-dom'

const ErrorShallowPostPublic = ({ theError, date, id }) => (
  <>
    <h2><Link to={`/post/${id}`}>{theError}</Link></h2>
    <span>{date}</span>
  </>
)


export default ErrorShallowPostPublic