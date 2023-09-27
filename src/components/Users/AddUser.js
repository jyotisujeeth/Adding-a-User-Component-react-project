import React, { useState }from "react";
import Button from '../Button';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import ErrorModal from "../UI/errorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');


    const addUserHandler =(event) => {
    event.preventDefault();
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if( +enteredAge < 10) {//+force convesatuion of string to number
      return;
    }
    // console.log(enteredAge , enteredUsername);
    props.onAddUser(enteredAge, enteredUsername);
    setEnteredUsername('');
    setEnteredAge('');
    };
    
const usernameChangeHandler = (event) => {
  setEnteredUsername(event.target.value);
};

const ageChangeHandler = (event) => {
  setEnteredAge(event.target.value);
};


    return (
      <div>
        <div className={classes.backdrop}/>
        <ErrorModal title="An error occured!" message="something went wrong! ">
          <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
              <label htmlFor="username"> UserName</label>
              <input
                id="username"
                type=" text"
                value={enteredUsername}
                onChange={usernameChangeHandler}
              ></input>
              <label htmlFor="age">Age(year)</label>
              <input
                id="age"
                type="number"
                value={enteredAge}
                onChange={ageChangeHandler}
              ></input>
              <Button type="submit">Add User</Button>
            </form>
          </Card>
        </ErrorModal>
      </div>
    );
};

export default AddUser;