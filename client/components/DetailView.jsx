import React from 'react';

const DetailView = (props) => {
  return (
    <div id="detail-view-wrapper">
      <div className="big-card" style={{ background: props.activeSwatch }}>
        <div className="big-card__label">
          {props.activeSwatch}
        </div>
      </div>
      <div id="button-wrapper">
        <button className="white-button short-button" onClick={props.handleChangeView}>Clear</button>
      </div>
    </div>
  )
}

export default DetailView;