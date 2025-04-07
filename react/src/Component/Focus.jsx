import React, { useRef } from 'react'

export const Focus = () => {
    const focus=useRef(null)
    function handleFocus(){
        focus.current.focus();
    }
  return (
    <div>
        <input type="text" placeholder='Enter the task' ref={focus} />
        <button onClick={handleFocus}>focus</button>
    </div>
  )
}
