import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddErrorForm from './AddErrorForm'
import { addConsoleErrorToFirebase } from '../actions/consoleErrors'

const AddErrorPost = ({ history }) => {
  const dispatch = useDispatch()

  const handleSubmit = (consoleError) => {
    dispatch(addConsoleErrorToFirebase(consoleError))
    history.push("/dashboard")
  }
  return (
    <AddErrorForm handleSubmit={handleSubmit} />
  )
}

export default AddErrorPost