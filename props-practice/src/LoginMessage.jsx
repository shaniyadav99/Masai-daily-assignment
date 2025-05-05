import React from 'react';
import { useState } from 'react';
import { Dashboard } from './Dashboard';


export const LoginMessage = () => {
    const [isLoggin,setIslogin]=useState(false);
  return (
    <div>
        <button onClick={()=>isLoggin?setIslogin(false):setIslogin(true)}>setlogin</button>
        {isLoggin?<Dashboard/> : alert("Please Log in sir ")}
    </div>
  )
}
