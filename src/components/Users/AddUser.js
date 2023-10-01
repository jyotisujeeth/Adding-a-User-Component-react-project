import React, { useState }from "react";
import Button from '../Button';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import ErrorModal from "../UI/errorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
const [error, setError]=useState();

    const addUserHandler =(event) => {
    event.preventDefault();
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({title: 'Invalid input',
        message:"Please enter a valid name and age(non-empty value)."})
      return;
    
    }
    if( +enteredAge < 10) {//+force convesatuion of string to number
 setError({
   title: "Invalid Age",
   message: "Please enter a  age(>10).",
 });
      
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
      {error && <ErrorModal title={error.title} message={error.message}/> }
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
        {/* </ErrorModal> */}
      </div>
    );
};

export default AddUser;