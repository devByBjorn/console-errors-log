import database from '../firebase/firebase'

const addConsoleErrorPublic = (consoleErrorPublic) => ({
  type: 'ADD_PUBLIC_ERROR',
  consoleErrorPublic
})

const addConsoleErrorPublicToFirebase = (consoleErrorPublicData = {}) =>
  (dispatch) => {
    const {
      theError = '',
      date = '',
      context = '',
      issue = '',
      solution = '',
    } = consoleErrorPublicData

    const consoleErrorPublic = {
      theError,
      date,
      context,
      issue,
      solution
    }

    const publicData = database.ref('public/consoleErrors')
      .push(consoleErrorPublic)
      .then(ref => {
        dispatch(addConsoleErrorPublic({ id: ref.key, ...consoleErrorPublic }))
      })

    return publicData
  }

const setConsoleErrorsPublic = (consoleErrorsPublic) => ({
  type: 'SET_PUBLIC_ERRORS',
  consoleErrorsPublic
})

const setConsoleErrorsPublicFromFirebase = () =>
  (dispatch) => {

    return database
      .ref('public/consoleErrors')
      .once('value')
      .then(snapshot => {
        const consoleErrorsPublic = []

        snapshot.forEach(childSnapshot => {
          consoleErrorsPublic.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          })
        })
        dispatch(setConsoleErrorsPublic(consoleErrorsPublic))
      })
  }

export { addConsoleErrorPublicToFirebase, setConsoleErrorsPublicFromFirebase }