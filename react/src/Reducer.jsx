import React, { useReducer } from 'react';
let initialState =[{
    print:""
}];
const reducer =(state=initialState,action)=>{
    switch(action.type){
        case "todo":
            return {
               ...state,print:action.val,
            }
    }
}
const handleSubmit = ()=>{
    
}

export const Reducer = () => {
    const [state,dispatch]=useReducer(reducer,initialState);
  return (
    <div>
        <input type="text"  onChange={(e)=>{dispatch({type:"todo",val:e.target.value})}} />
        <button onClick={handleSubmit}>Add task</button>
    </div>
  )
}
