import React, { useRef, useState } from 'react'

export const Form = () => {
    const [name,setName]=useState("");
    const [feedback,setFeedback]=useState("");
    const [data,setData]=useState({})
    const refv=useRef();
    const [val,setVal]=useState([])
    function handleSubmit(e){
    e.preventDefault();
    let id=Math.random();
    setData({
        Id:id,
        Name:name,
        feedback:feedback,
        Rating: refv.current.value
    })
    setVal(val);
    }
  return (
    <div>
        <form  onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter The Name' onChange={(e)=>setName(e.target.value)} />
        <br />
        <input type="textarea"  placeholder='Enter Feedback' onChange={(e)=>setFeedback(e.target.value)} />
        <input type="number" placeholder='Enter Rating'  ref={refv}/>
        <button type='submit' >Submit</button>
        </form>
    </div>
  )
}
