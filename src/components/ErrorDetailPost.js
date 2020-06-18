import React from 'react'
import { Link } from 'react-router-dom'

const ErrorDetailPost = ({
  theError,
  date,
  context,
  issue,
  solution, }) => (
    <>
      <h2>{theError}</h2>
      <span>{date}</span>
      <p>{context}</p>
      <p>{issue}</p>
      <p>{solution}</p>
    </>
  )


export default ErrorDetailPost