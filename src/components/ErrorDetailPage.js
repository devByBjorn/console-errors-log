import React from 'react'


const ErrorDetailPage = ({ match }) => {

  return (
    <div>
      Error detail with id {`${match.params.id}`}
    </div>
  )
}

export default ErrorDetailPage