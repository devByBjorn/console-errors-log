import database from '../firebase/firebase'

const addConsoleError = (consoleError) => ({
  type: 'ADD_CONSOLE_ERROR',
  consoleError
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

    const privateData = database.ref(`users/${uid}/consoleErrors`)
      .push(consoleError)
      .then(ref => {
        dispatch(addConsoleError({ id: ref.key, ...consoleError }))
      })

    return privateData
  }

const editConsoleError = (id, updates) => ({
  type: 'EDIT_CONSOLE_ERROR',
  id,
  updates,
})

const editConsoleErrorInFirebase = (id, updates) =>
  (dispatch, getState) => {
    const uid = getState().auth.uid

    return database
      .ref(`users/${uid}/consoleErrors/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editConsoleError(id, updates))
      })
  }

const deleteConsoleError = (id) => ({
  type: 'DELETE_CONSOLE_ERROR',
  id,
})

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


export {
  addConsoleErrorToFirebase,
  editConsoleErrorInFirebase,
  setConsoleErrorsFromFirebase,
}