import React , {useState,useContext} from 'react'
import userContext from '../context/userContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const {setUser} = useContext(userContext) //setUser accessing from userContext
       const setSubmit = (e)=>{
        e.preventDefault()
        setUser({username,password})
       }
    return (
        <>
        <input type="text" name=""
        value={username}
        onChange={(e)=> setUsername(e.target.value)}
        id=""
        placeholder='Username' />
        {" "} 
        <input type="password" name=""
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        id="" placeholder='Password' />
        <button onClick={setSubmit}> Submit</button>
        </>
    )
}

export default Login
