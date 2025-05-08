import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams()
    return (
        <>
        <div className='text-orange-400 font-bold text-2xl text-center p-4'>User : {id}</div>
        </>
    )
}

export default User
