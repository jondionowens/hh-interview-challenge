import React from 'react';
import Topbar from './Topbar.jsx';
import Cards from './Cards.jsx';
import Pagination from './Pagination.jsx';
import GlobalStyles from '../globalStyles.css';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      swatches: [],
      currentPage: 1,
      totalPages: 1
    }
  }

  componentDidMount() {
    axios.get('/swatches', {
      params: {
        page: this.state.page
      }
    })
      .then((res) => {
        console.log(res)
        this.setState({ swatches: res.data.swatches, totalPages:res.data.pages });
      })
      .catch(function (err) {
        console.log(err);
      });
  }



  render() {
    return (
      <div id="wrapper">
        <Topbar />
        <div id="main">
          <main id="content">
            <Cards swatches={this.state.swatches} />
            <Pagination swatches={this.state.swatches} />
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