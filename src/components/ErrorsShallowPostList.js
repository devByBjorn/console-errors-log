import React from 'react'
import { useSelector } from 'react-redux'
import ErrorShallowPost from './ErrorShallowPost'

// Get all posts from all users. How? allConsoleErrorsReducer? 

const ErrorsShallowPostList = () => {
  const consoleErrors = useSelector(state => state.consoleErrors)
  return (
    <ul>
      {consoleErrors.map(consoleError =>
        <li key={consoleError.id}>
          <ErrorShallowPost
            id={consoleError.id}
            theError={consoleError.theError}
            date={consoleError.date}
            context={consoleError.context}
          />
        </li>
      )}
    </ul>
  )
}

export default ErrorsShallowPostList