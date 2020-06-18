import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const ErrorShallowPost = ({ theError, date, id }) => (
  <>
    <h2><Link to={`/edit/${id}`}>{theError}</Link></h2>
    <span>{date}</span>
  </>
)


export default ErrorShallowPost