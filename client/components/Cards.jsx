import uniqid from 'uniqid';
import React from 'react';
import Card from './Card.jsx';

const Cards = (props) => {
  const cardElements = props.swatches.map((card) => {
     return <Card key={uniqid()} hex={card.hex}/>
  })

  return (
    <div className="cards">
      {cardElements}
    </div>
  )
}

export default Cards;