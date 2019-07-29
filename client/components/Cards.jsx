import React from 'react';
import Card from './Card.jsx';

const Cards = (props) => {
  const cardElements = props.swatches.map((card) => {
     return <Card key={card.id} hex={card.hex}/>
  })

  console.log(cardElements)
  return (
    <div className="cards">
      {cardElements}
    </div>
  )
}

export default Cards;