import React from 'react';
import Button from './button';
import './Card.css';

const Card = ({ title, description, buttonText }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <Button text={buttonText} />
    </div>
  );
};

export default Card;