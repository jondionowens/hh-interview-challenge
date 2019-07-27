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
      <div>
        <Topbar/>
        <h1>Hell</h1>
      </div>

    )
  }
}

export default App;