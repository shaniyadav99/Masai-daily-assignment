import React from 'react'
import { useState } from 'react'
import { Info } from './Info';

export const UserDashboard = () => {
    const details={
        StudentName:"Shani Yadav",
        Email:"yshani477@gmail.com",
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit porro harum iste alias minus quos eligendi, quibusdam voluptates voluptatem? Voluptates hic animi id porro voluptatum culpa quod ratione accusamus tenetur."
      }
      const [login ,setLogin]=useState(false);
  return (
    <div>
        <br />
        <button onClick={()=>login ? setLogin(false) : setLogin(true)}>Setlogin</button>
        {login ? <Info details={details}/> : <h1>Please Login first</h1>}
    </div>
  )
}
