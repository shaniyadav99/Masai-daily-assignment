import React, { useState } from 'react'

export const Login = () => {
    const [email,setEmail]=useState("")
const [password,setPassword]=useState("");
const handleSubmit=()=>{
    
}
  return (
    <>
    <input type="email" placeholder='Enter User Email' onChange={(e)=>{setEmail(e.target.value)}}/>
    <input type="password" placeholder='Enter Password' onChange={(e)=>{setPassword(e.target.value)}} />
    <button onClick={handleSubmit}>Submit</button>
    </>
  )
}
