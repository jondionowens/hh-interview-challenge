import React from 'react';

const Card = (props) => {
  return (
    <div className="content__card" style={{ background: props.hex }} onClick={props.handleSelectSwatch}>
      <div className="content__card-label">{props.hex}</div>
    </div>
  )
}

export default Card;