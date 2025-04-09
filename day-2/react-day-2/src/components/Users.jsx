import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Users.css"
const Users = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [db, setdb] = useState([]);
  const [editId, setEditId] = useState(null);
  const [search , setSearch] = useState("")

  const handelAdd = async () => {
    let userData = { first, last };
    try {
      await axios.post(
        "https://newdata-880ed-default-rtdb.firebaseio.com/users.json",
        userData
      );
      // alert("success");

      setFirst("");
      setLast("");
      fetching();
    } catch (error) {
      console.log(error);
    }
  };

  const fetching = async () => {
    try {
      let res = await axios.get(
        "https://newdata-880ed-default-rtdb.firebaseio.com/users.json"
      );
      let fetcheduser = [];
      console.log(res.data)
      for (let key in res.data) {
        fetcheduser.push({ id: key, ...res.data[key] });
        setdb(fetcheduser);
        console.log(db);
      }
    } catch (error) {}
  };
  useEffect(() => {
    fetching();
  }, []);

  const handelDelete = async (id) => {
    try {
      await axios.delete(
        `https://newdata-880ed-default-rtdb.firebaseio.com/users/${id}.json`
      );
      fetching();
    } catch (error) {}
  };

  const handelEdit = async (id) => {
    let editedUser = db.find((user) => user.id === id);
    if (editedUser) {
      setFirst(editedUser.first);
      setLast(editedUser.last);
      setEditId(id);
    }
  };

  const handelUpdate =async()=>{
    let updatedUser = { first, last };
    try {
      await axios.patch(
        `https://newdata-880ed-default-rtdb.firebaseio.com/users/${editId}.json`,
        updatedUser
      );
      setFirst("");
      setLast("");
      setEditId(null);
      fetching();
    } catch (error) {
      console.log(error);
    }
  }

  const filterdUser = db.filter((user)=>(
    `${user.first} ${user.last}`.toLowerCase().includes(search.toLowerCase())
  ))
  return (
    <div className="container">
      <input
        value={search}
        placeholder="Search here....."
        onChange={(e) => setSearch(e.target.value)}
      />
      <input
        value={first}
        type="text"
        placeholder="First Name"
        onChange={(e) => setFirst(e.target.value)}
      />
      <input
        value={last}
        type="text"
        placeholder="Last Name"
        onChange={(e) => setLast(e.target.value)}
      />
      <button onClick={editId ? handelUpdate : handelAdd}>
        {editId ? "Update" : "Add"}
      </button>
  
      <ul className="user-list">
        {filterdUser.map((user) => (
          <li key={user.id}>
            <div className="user-info">
              {user.first} {user.last}
            </div>
            <div className="user-actions">
              <button onClick={() => handelEdit(user.id)}>Edit</button>
              <button onClick={() => handelDelete(user.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );  
};

export default Users;