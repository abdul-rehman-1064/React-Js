import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

function Protected({children}) {

    const authStatus = useSelector((state)=> state.auth.status);

  return (
    authStatus ? (
      <>{children}</>
    ) : (
        <div>
      <Navigate to="/" />
      </div>
    )
  )
}

export default Protected