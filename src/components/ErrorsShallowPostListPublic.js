import React from 'react'
import { useSelector } from 'react-redux'
import ErrorShallowPostPublic from './ErrorShallowPostPublic'

const ErrorsShallowPostListPublic = () => {
  const consoleErrorsPublic = useSelector(state => state.consoleErrorsPublic)
  return (
    <ul>
      {consoleErrorsPublic.map(consoleError =>
        <li key={consoleError.id}>
          <ErrorShallowPostPublic
            id={consoleError.id}
            theError={consoleError.theError}
            date={consoleError.date}
          />
        </li>
      )}
    </ul>
  )
}

export default ErrorsShallowPostListPublic