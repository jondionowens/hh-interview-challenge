import React from 'react';

const DetailView = (props) => {
  return (
    <div className="big-card" style={{ background: props.activeSwatch }}>
      <div className="big-card__label">
        {props.activeSwatch}
      </div>
    </div>
  )
}

export default DetailView;