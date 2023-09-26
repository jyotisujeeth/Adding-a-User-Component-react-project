import React, { useState }from "react";
import Button from '../Button';
import Card from '../UI/Card';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');


    const addUserHandler =(event) => {
    event.preventDefault();
    console.log(enteredAge , enteredUsername);
    };
    
const usernameChangeHandler = (event) => {
  setEnteredUsername(event.target.value);
};

const ageChangeHandler = (event) => {
  setEnteredAge(event.target.value);
};


    return (
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username"> UserName</label>
          <input id="username" type=" text" onChange={usernameChangeHandler}></input>
          <label htmlFor="age">Age(year)</label>
          <input id="age" type="number" onChange={ageChangeHandler}></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    );
};

export default AddUser;