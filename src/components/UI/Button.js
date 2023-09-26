import React from "react";

import classes from './Button.module.css';

const Button = (prpos) => {
    return (
        <button 
        className={classes.Button} type={props.type || 'button'}>   </button>
    );
};

export default Button;