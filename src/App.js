import React, { useState }from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from "./componentsUsersUserslist";


function App() {
  const [userList, setusersList]=useState([]);

  const addUserHandler = (Uname, Uage) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, 
        {name: Uname, age: Uage, id: Math.random().toString()}]

    });
  };
  return (
    <div>
<AddUser onAddUser={addUserHandler}/>
<UsersList users={[]}/>
    </div>
  );
}

export default App;
