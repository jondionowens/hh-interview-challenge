import React from 'react';

const Sidebar = (props) => {
  return (
    < div id="sidebar" >
      <button className="white-button" onClick={props.handleShowRandomSwatch}>Random Color</button>
      <ul className="sidebar__families">
        <li>Red</li>
        <li>Orange</li>
        <li>Yellow</li>
        <li>Green</li>
        <li>Blue</li>
        <li>Purple</li>
        <li>Orange</li>
        <li>Gray</li>
      </ul>
    </div >
  )
}

export default Sidebar;