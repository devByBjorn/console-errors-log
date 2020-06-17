import database from '../firebase/firebase'

const addConsoleError = (consoleError) => ({
  type: 'ADD_CONSOLE_ERROR',
  consoleError
})

const editConsoleError = (id, updates) => ({
  type: 'EDIT_CONSOLE_ERROR',
  id,
  updates,
})

const addConsoleErrorToFirebase = (consoleErrorData = {}) =>
  (dispatch, getState) => {
    const {
      theError = '',
      date = '',
      context = '',
      issue = '',
      solution = '',
    } = consoleErrorData

    const consoleError = {
      theError,
      date,
      context,
      issue,
      solution
    }

    const uid = getState().auth.uid

    return database.ref(`users/${uid}/consoleErrors`)
      .push(consoleError)
      .then(ref => {
        dispatch(addConsoleError({ id: ref.key, ...consoleError }))
      })
  }

const setConsoleErrors = (consoleErrors) => ({
  type: 'SET_CONSOLE_ERRORS',
  consoleErrors
})

const setConsoleErrorsFromFirebase = () =>
  (dispatch, getState) => {
    const uid = getState().auth.uid

    return database
      .ref(`users/${uid}/consoleErrors`)
      .once('value')
      .then(snapshot => {
        const consoleErrors = []

        snapshot.forEach(childSnapshot => {
          consoleErrors.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          })
        })
        dispatch(setConsoleErrors(consoleErrors))
      })
  }


export { addConsoleErrorToFirebase, editConsoleError, setConsoleErrorsFromFirebase }