import './App.css'
import Login from './components/Login'
import MyProfile from './components/MyProfile'
import UserContextProvider from './context/UserContextProvider'

function App() {
 
  return (
    <UserContextProvider>
     <Login />
     <MyProfile />
    </UserContextProvider>
  )
}

export default App
