import React from "react";


import calsses from 'Card.module.css';
const Card = (props) => {
return
(
     <div className ={calsses.card} ${props.classesname}> (props.children)

</div>;
)};

export default Card;