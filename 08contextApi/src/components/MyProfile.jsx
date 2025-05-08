import React , {useContext} from 'react'
import userContext from '../context/userContext'

function MyProfile() {
    const {user} = useContext(userContext)
    
    if(!user) return <div>Please Login</div>

    return <div>Welcome {user.username}</div>
}

export default MyProfile
