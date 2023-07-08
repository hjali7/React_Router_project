import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectRouter = ({children , user}) => {
    if(!user) {
        return <Navigate to='/' />
    }
  return (
    <div>{children}</div>
  )
}

export default ProtectRouter