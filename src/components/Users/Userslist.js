import React from "react";

import card from '../UI/Card';
const usersList = props => {
return (
  <Card  className={ classes.users}>
    <ul>
      {props.users.map((user) => {
        <li key={user.id}>
          {user.name} ({usersList.age} year old)
        </li>;
      })}
    </ul>
  </Card>
);
};

export default UserList;