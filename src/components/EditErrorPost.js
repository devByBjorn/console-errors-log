import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { editConsoleError } from '../actions/consoleErrors'
import AddErrorForm from './AddErrorForm'

const EditErrorPost = ({ match }) => {
  const dispatch = useDispatch()
  const consoleErrors = useSelector(state => state.consoleErrors)
  const findError = consoleErrors.find(consoleError => consoleError.id === match.params.id)

  const handleSubmmit = () => dispatch(editConsoleError(findError.id, findError))

  return (
    <div>Edits blogpost identified by id - Private route</div>
  )
}

export default EditErrorPost