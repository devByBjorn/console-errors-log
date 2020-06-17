import React from 'react'
import { Link } from 'react-router-dom'

const ErrorShallowPost = ({ theError, date, context, id }) => (
  <>
    <h2><Link to={`/post/${id}`}>{theError}</Link></h2>
    <span>{id}</span>
    <span>{date}</span>
    <p>{context}</p>
  </>
)


export default ErrorShallowPost