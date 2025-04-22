import React, { useRef, useState } from 'react'

export const Timer = () => {
    const intervalid=useRef(null);
    const [count,setCount]=useState(0);
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
        <h1>Timer : {count}</h1>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}
