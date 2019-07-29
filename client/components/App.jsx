import React from 'react';
import Topbar from './Topbar.jsx';
import Cards from './Cards.jsx';
import GlobalStyles from '../globalStyles.css';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div id="wrapper">
        <Topbar />
        <div id="main">
          <main id="content">
            <Cards />
          </main>
          <div id="sidebar">
            <button>Random Color</button>
            <ul>
              <li>Red</li>
              <li>Orange</li>
              <li>Yellow</li>
              <li>Green</li>
              <li>Blue</li>
              <li>Purple</li>
              <li>Orange</li>
              <li>Gray</li>
            </ul>
          </div>
        </div>
      </div>

    )
  }
}

export default App;