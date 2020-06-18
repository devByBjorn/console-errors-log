import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { editConsoleErrorInFirebase } from '../actions/consoleErrors'
import AddErrorForm from './AddErrorForm'

const ErrorEditPage = ({ match, history }) => {
  const consoleErrors = useSelector(state => state.consoleErrors)
  const dispatch = useDispatch()
  const consoleError = consoleErrors.find(consoleError =>
    consoleError.id === match.params.id)
  const { id } = consoleError

  const handleSubmit = consoleError => {
    dispatch(editConsoleErrorInFirebase(id, consoleError))
    history.push('/dashboard')
  }

  return (
    <>
      <button onClick={() => history.push('/dashboard')}>Back</button>

      <AddErrorForm
        handleSubmit={handleSubmit}
        consoleError={consoleError}
      />
    </>
  )
}

export default ErrorEditPage
