import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import ErrorDetailPost from './ErrorDetailPost'

const ErrorDetailPage = ({ match, history }) => {
  const consoleErrorsPublic = useSelector(state => state.consoleErrorsPublic)

  const {
    theError,
    date,
    context,
    issue,
    solution } = consoleErrorsPublic.find(error => error.id === match.params.id)

  return (
    <>
      <button onClick={() => history.push('/')}>Back</button>
      <ErrorDetailPost
        theError={theError}
        date={date}
        context={context}
        issue={issue}
        solution={solution}
      />
    </>
  )
}

export default ErrorDetailPage

