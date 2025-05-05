import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Greeting } from './Greeting';
import { UserProfile } from './UserProfile';
import { LoginMessage } from './LoginMessage';
import { UserDashboard } from './UserDashboard';

function App() {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  return (
    <>
      <input type="text" placeholder='Enter the Name' onChange={(e)=>setName(e.target.value)}/>
      <input type="text" placeholder='Enter the Timing' onChange={(e)=>setTime(e.target.value)} />
      <Greeting name={name} time={time}/>
      <UserProfile/>
      <LoginMessage/>
      <UserDashboard/>
    </>
  )
}

export default App
