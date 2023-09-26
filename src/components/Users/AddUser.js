import React from "react";

import card from '../UI/Card';
const AddUser = (props) => {
    const addUserHandler =(event) => {
    event.preventDefault();
    };
    
    return (
      <Card>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username"> UserName</label>
          <input id="username" type=" text"></input>
          <label htmlFor="age">Age(year)</label>
          <input id="age" type="number"></input>
          <button type="submit">Add User</button>
        </form>
      </Card>
    );
};

export default AddUser;