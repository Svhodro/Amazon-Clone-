import React, { useContext, useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import UserContext from '../../context/UserContext'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import app from '../../firebase/firebase'

function Private() {
  const navigate = useNavigate()
const [user,setuser]=useState(false)

  const auth=getAuth(app)
  onAuthStateChanged(auth, (user) => {
    if (user) {   
     
      setuser(true)
            // ...
    } else {    
      navigate('/login')
    }

  });  

  if (user) {
    return <Outlet/>
  }
 


}

export default Private