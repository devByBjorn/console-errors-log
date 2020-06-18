import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddErrorForm from './AddErrorForm'
import { addConsoleErrorToFirebase } from '../actions/consoleErrors'
import { addConsoleErrorPublicToFirebase } from '../actions/consoleErrorsPublic'

const AddErrorPost = ({ history }) => {
  const dispatch = useDispatch()

  const handleSubmit = (consoleError) => {
    dispatch(addConsoleErrorToFirebase(consoleError))
    dispatch(addConsoleErrorPublicToFirebase(consoleError))
    history.push("/dashboard")
  }
  return (
    <AddErrorForm handleSubmit={handleSubmit} />
  )
}

export default AddErrorPost