import React, { useState } from 'react';
import { Avatar } from './Avatar';
import UserInfo from './UserInfo';

export const UserProfile = () => {
  const [image, setImage] = useState('');

  function loadFile(event) {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  }
  const data={
    StudentName:"Shani Yadav",
    Email:"yshani477@gmail.com",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit porro harum iste alias minus quos eligendi, quibusdam voluptates voluptatem? Voluptates hic animi id porro voluptatum culpa quod ratione accusamus tenetur."
  }
  return (
    <div>
      <input type="file" onChange={loadFile} accept="image/*" />
      <br />
      <Avatar img={image}/>
      <UserInfo data={data}/>
    </div>
  );
};
