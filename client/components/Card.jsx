import React from 'react';

const Card = (props) => {
  return (
    <div className="content__card" style={{ background: props.hex }} onClick={() => props.handleSelectSwatch(props.hex)}>
      <div className="content__card-label">{props.hex}</div>
    </div>
  )
}

export default Card;