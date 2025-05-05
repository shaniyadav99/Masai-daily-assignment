import React from 'react'

export const Avatar = ({img}) => {
  return (
    <div >
        <img src={img} alt="Image.png"  style={{height:"200px", width:"200px"}}/>
    </div>
  )
}
