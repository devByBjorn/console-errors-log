import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ErrorShallowPost from './ErrorShallowPost'

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
          />
        </li>
      )}
    </ul>
  )
}

export default ErrorsShallowPostList