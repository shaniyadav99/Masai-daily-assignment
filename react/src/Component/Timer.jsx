import React, { useRef, useState } from 'react'

export const Timer = () => {
    const [count,setCount]=useState(0);
    const intervalid=useRef(null);
    function start(){
        if(intervalid.current===null){
            intervalid.current=setInterval(()=>{
                setCount(count=>count+1);
            },1000)
        }
    }
    function stop(){
        clearInterval(intervalid.current);
        intervalid.current=null;
    }
    function reset(){
        clearInterval(intervalid.current);
        intervalid.current=null;
        setCount(0);
    }
  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={start}>start</button>
        <button onClick={stop}>stop</button>
        <button onClick={reset}>reset</button>
    </div>
  )
}
