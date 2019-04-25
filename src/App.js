import React, { useState } from 'react'
import './App.css'
import AppHeader from './containers/AppHeader'
import AppBody from './containers/AppBody'
import AppFooter from './containers/AppFooter'


const initialAuth = {
  username: '',
  jwt: {}
}

const AuthContext = React.createContext({})

const App = () => {
  const [auth, setAuth] = useState(initialAuth)

  return (
    <AuthContext.Provider value={
      {
        auth, 
        setAuth: (newAuth) => setAuth(newAuth)
      }
    } >
      <div className='app-container'>
        <AppHeader />
        <AppBody />
        <AppFooter />
      </div>
    </AuthContext.Provider>
  )
}

export default App;
