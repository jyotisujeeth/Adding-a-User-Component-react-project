import React from "react";
import Card from "./Card";
import Button from './Button'
import classes from './ErrorModal.module.css';
const ErrorModal = props => {
  return  <Card className={classes.modal}>
<header className={classes.header}>
    <h2>{props.title}</h2>
</header>
<Div className={classes.content}>
    <p>{props.message}</p>
</Div>
<footer className={classes.actions}>

<Button>Okay</Button>
</footer>
  </Card>
};

export default ErrorModal;