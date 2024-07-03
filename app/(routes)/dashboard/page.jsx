"use client"
import { app } from '@/config/FirebaseConfig'
import {doc, getDoc, getFireStore} from "firebase/firestore"
import { LogoutLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import React from 'react'
import { useEffect } from 'react/cjs/react.production.min'
import { useRouter } from 'next/navigation'

function Dashboard() {

  const db = getFireStore(app)
  const {user} = useKindeBrowserClient()
  const router = useRouter()
  const [loading,setLoading] = useState(true)
  useEffect(()=>{
    user && isBusinessRegistered()
  },[user])
  const isBusinessRegistered=async()=>{
   
    const docRef = doc(db,"Business",user.email)
    const docSnap = await getDoc(docRef)
    if(docSnap.exists()){
      console.log("Doc data:",docSnap.data())
      setLoading(false)
    }else{
      console.log("No such document")
      setLoading(false)
      router.replace("/create-business")
    }
  }
  if(loading){
    return <h2>Loading...</h2>
  }
  return (
    <div>  Dashboard <LogoutLink>Logout</LogoutLink></div>
  )
}

export default Dashboard