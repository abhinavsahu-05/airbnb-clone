import React from 'react'
import { useContext } from 'react'
import { authDataContext } from './AuthContext.jsx'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { createContext } from 'react'

export let UserDataContext = createContext()

function UserContext({children}) {

    const {serverUrl} = useContext(authDataContext)
    const [userData, setUserData] = useState(null)
    const getCurrentUser= async()=>{
        try {
            let result = await axios.get(serverUrl + "/api/user/currentuser",
            { withCredentials: true } )
             setUserData(result.data)   

        } catch (error) {
            setUserData(null)
            console.log(error);
            
        }
    }

    useEffect(()=>{
        getCurrentUser()
    },[] )

let value={ userData, setUserData }

  return (
      <UserDataContext.Provider value={value} >
        {children}
      </UserDataContext.Provider>
  )
}

export default UserContext
