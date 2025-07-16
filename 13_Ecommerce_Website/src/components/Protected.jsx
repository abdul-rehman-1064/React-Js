import { useUser } from '@clerk/clerk-react';
import React from 'react'
import { Navigate } from 'react-router-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Protected({children}) {
    const {user} = useUser();

  return (
    user ? (
      <>{children}</>
    ) : (
        <div>
        {toast.error("You need to sign in first!")}
      <Navigate to="/" />
      </div>
    )
  )
}

export default Protected