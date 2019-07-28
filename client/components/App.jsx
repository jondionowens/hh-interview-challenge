import React from 'react';
import Topbar from './Topbar.jsx';
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
            <div class="cards">
            <div class="content__card">
              <div class="content__card-label">#00ff00</div>
            </div>
            <div class="content__card"></div>
            <div class="content__card"></div>
            <div class="content__card"></div>
            <div class="content__card"></div>
            <div class="content__card"></div>
            <div class="content__card"></div>
            <div class="content__card"></div>
            <div class="content__card"></div>
            <div class="content__card"></div>
            <div class="content__card"></div>
            <div class="content__card"></div>

            </div>
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