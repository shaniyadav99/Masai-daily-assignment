import React from 'react'

export const Info = ({details}) => {
  return (
    <div>
        <h1>{details.StudentName}</h1>
        <h2>{details.Email}</h2>
        <h4>{details.bio}</h4>
    </div>
  )
}
