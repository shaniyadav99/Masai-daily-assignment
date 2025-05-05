import React from 'react'

const UserInfo = ({data}) => {
  return (
    <div>
        <h1>{data.StudentName}</h1>
        <h2>{data.Email}</h2>
        <h4>{data.bio}</h4>
    </div>
  )
}

export default UserInfo