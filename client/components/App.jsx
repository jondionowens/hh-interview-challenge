import React from 'react';
import Topbar from './Topbar.jsx';
import MainContent from './MainContent.jsx';
import Sidebar from './Sidebar.jsx';
import Cards from './Cards.jsx';
import Pagination from './Pagination.jsx';
import GlobalStyles from '../globalStyles.css';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      swatches: [],
      activeSwatch: null,
      currentPage: 1,
      totalPages: 1,
      view: 'grid',
      lastPageActive: null
    }
  }

  componentDidMount() {
    axios.get('/swatches', {
      params: {
        page: this.state.currentPage
      }
    })
      .then((res) => {
        this.setState({ activeSwatch: res.data.swatches[0].hex })
        this.setState({ swatches: res.data.swatches, totalPages: res.data.pages });
        document.getElementById("pagination").children[0].className += ' pagination__page--active';
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  handleChangePage(e, page) {
    let pageLabels = document.getElementById("pagination").children;
    for (let i = 0; i < pageLabels.length; i++) {
      pageLabels[i].className = 'pagination__page';
    }
    this.setState({ lastPageActive: e.target })
    e.target.className += ' pagination__page--active';
    axios.get('/swatches', {
      params: {
        page: page
      }
    })
      .then((res) => {
        this.setState({ swatches: res.data.swatches, totalPages: res.data.pages, currentPage: page });
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  handleSelectSwatch(swatch) {
    this.setState({ activeSwatch: swatch }, this.setState({ view: 'detail' }));
  }

  handleChangeView() {
    this.setState({ view: 'grid' });
  }

  handleShowRandomSwatch() {
    axios.get('/swatches/random')
      .then((res) => {
        this.setState({ activeSwatch: res.data.swatches.hex });
        this.setState({ view: 'detail' });
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
          <MainContent
            swatches={this.state.swatches}
            activeSwatch={this.state.activeSwatch}
            totalPages={this.state.totalPages}
            handleChangePage={this.handleChangePage.bind(this)}
            handleSelectSwatch={this.handleSelectSwatch.bind(this)}
            handleChangeView={this.handleChangeView.bind(this)}
            view={this.state.view} />
          <Sidebar handleShowRandomSwatch={this.handleShowRandomSwatch.bind(this)} />
        </div>
      </div>
    )
  }
}

export default App;