import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [title,setTitle]=useState("");
  const [category,setCategory]=useState(""); 
  const [todotask,setTodotask]=useState([]);
  
  function handleTask(){
    if(title==="" || category===""){
      alert("Please fill all the fields");
      return;
    }
    if(todotask.some((task)=>task.title===title)){
      alert("Task already exists");
      return;
    }
    const task={
      title:title,
      category:category
    }
    setTodotask([...todotask,task]);
    setTitle("");
    setCategory("");
  }
function handleFIlter(e){
  const filterValue=e.target.value;
  const filteredTasks=todotask.filter((task)=>task.category.toLowerCase().includes(filterValue.toLowerCase()));
  setTodotask(filteredTasks);
}
function handleDelete(index){
  const newTasks=todotask.filter((task,taskIndex)=>taskIndex!==index);
  setTodotask(newTasks);
  setTitle("");
  setCategory("");
}
function handleDeleteAllTask(){
  setTodotask([]);
  setTitle(""); 
  setCategory("");
}
  return (
    <>
      <input type="text" placeholder='Enter Title' onChange={(e)=>setTitle(e.target.value)} value={title}  />
      <br />
      <br />
      <input type="text" placeholder='Enter Category' onChange={(e)=>setCategory(e.target.value)}  value={category}/>
      <br /><br />
      <button onClick={handleTask}>Add Task</button>
      <br /><br />
      <table style={{border:"1px solid black",width:"100%"}}>
        <thead >
          <tr style={{border:"1px solid black"}}>
            <th style={{border:"1px solid black"}}>S.No</th>
            
            <th style={{border:"1px solid black"}}>Title</th>
            <th style={{border:"1px solid black"}}>Category</th>
            <th style={{border:"1px solid black"}}>Task Delete</th>
          </tr>
        </thead>
        <tbody>
          {todotask.map((task,index)=><tr key={index}>
            <td style={{border:"1px solid black"}}>{index+1}</td>
            <td style={{border:"1px solid black"}}>{task.title}</td>
            <td style={{border:"1px solid black"}}>{task.category}</td>
            <td><button onClick={()=>handleDelete(e)}>Delete Task</button></td>
          
          </tr>)}
        </tbody>
      </table>
      <br />
      <br />
      <select  onChange={handleFIlter} style={{width:"100px",height:"30px"}}>
        <option value="">
          Select Category
        </option>
        <option value="Study">Study</option>
        <option value="Gym">Gym</option>
        <option value="Personel">Personel</option>
      </select>
      <br /><br />
      <button onClick={handleDeleteAllTask}>Delele All The Task</button>
    </>
  )
}

export default App
