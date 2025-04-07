// import React from 'react'

// export const counter = (state,action) => {
//   switch(action){
//     case "increamnet":
//         return {
//             firstCounter:state.firstCounter+action.payload
//         }
//     case "decrement":
//         return {
//             firstCounter:state.firstCounter-action.payload
//         }
//     case "reset":
//         return 
//             initialstate;
//     default:
//         return state;
//   }
// }

// import React, { useRef } from 'react'

// export const Counter = () => {
//     const count=useRef(0);
//     function increament(){
//         count.current+=count.current-1;
//     }
//     function decrement(){
//         count.current-=count.current;
//     }
//     function reset(){
//         count.current=0;
//     }
//   return (
//     <div>
//         <h1>Count : {count.current}</h1>
//         <button onClick={increament}>Increase</button>
//         <button onClick={decrement}>Decrease</button>
//         <button onClick={reset}>Reset</button>
//     </div>
//   )
// }

import React, { useState } from 'react'

export const Counter = () => {
    const [count,setCount]=useState(0)
  return (
    <div>
        <h1>count:{count}</h1>
        <button onClick={()=>setCount(count=>count+1)}>increament</button>
    </div>
  )
}
