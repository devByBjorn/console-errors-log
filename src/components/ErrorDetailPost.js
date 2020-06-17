import React from 'react'
import { Link } from 'react-router-dom'

const ErrorDetailPost = ({ theError, date, context, solution, id }) => (
  <>
    <h2><Link to={`/post/${id}`}>{theError}</Link></h2>
    <span>{date}</span>
    <p>{context}</p>
    <p>{solution}</p>
  </>
)


export default ErrorDetailPost