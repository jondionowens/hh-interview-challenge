import React from 'react';
import Cards from './Cards.jsx';
import DetailView from './DetailView.jsx';
import Pagination from './Pagination.jsx';

const MainContent = (props) => {
  if (props.view === 'grid') {
    return (
      <main id="content">
        <Cards swatches={props.swatches} handleSelectSwatch={props.handleSelectSwatch} />
        <Pagination totalPages={props.totalPages} handleChangePage={props.handleChangePage} />
      </main>
    )
  }

  else {
    return (
      <main id="content">
        <DetailView activeSwatch={props.activeSwatch} handleSelectSwatch={props.handleSelectSwatch}/>
      </main>
    )
  }
}

export default MainContent;