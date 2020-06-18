import React, { useState, useEffect } from 'react'

const AddErrorForm = ({ handleSubmit, consoleError }) => {
  const [theError, setTheError] = useState(consoleError ? consoleError.theError : '')
  const [context, setContext] = useState(consoleError ? consoleError.theError : '')
  const [issue, setIssue] = useState(consoleError ? consoleError.theError : '')
  const [solution, setSolution] = useState(consoleError ? consoleError.theError : '')
  const [date, setDate] = useState({ now: new Date() })

  const onSubmit = e => {
    e.preventDefault()
    handleSubmit({
      theError,
      context,
      issue,
      solution,
      date: date.now.toString(),
    })
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Console Error</label>
      <input
        onChange={e => setTheError(e.target.value)}
        value={theError}
        name="theError"
        type="text"
      />

      <label>Context/ Enviorment</label>
      <textarea
        onChange={e => setContext(e.target.value)}
        value={context}
        name="context"
      />

      <label>Issue caused</label>
      <textarea
        onChange={e => setIssue(e.target.value)}
        value={issue}
        label="Issue"
        name="issue"
      />

      <label>Solution</label>
      <textarea
        onChange={e => setSolution(e.target.value)}
        value={solution}
        label="Solution"
        name="solution"
      />

      <input type="submit" />
    </form>
  )
}

export default AddErrorForm