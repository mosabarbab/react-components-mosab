import React from 'react';
import Button from './button';
import './Card.css';

function Card (){
  return (
    <div className='card'>
      <h2 className="card-title">{"title"}</h2>
      <p className="card-description">{"Lorem ipsum, dolor sit amet consectetur adipisicing elit"}</p>
      <Button text={"buttonText"} />
    </div>
  );
};

export default Card;