import React, { useRef } from 'react'

export const Fileupload = () => {
    const fileinput=useRef(null);
    function handleclick() {
        fileinput.current.click()
    }

  return (
    <div>
        <input type="file"  ref={fileinput}/>
        <button onClick={handleclick}>click</button>
    </div>
  )
}
