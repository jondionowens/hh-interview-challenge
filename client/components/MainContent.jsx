import React from 'react';
import Cards from './Cards.jsx';
import Pagination from './Pagination.jsx';

const MainContent = (props) => {
  return (
    <main id="content">
      <Cards swatches={props.swatches} />
      <Pagination totalPages={props.totalPages} handleChangePage={props.handleChangePage} />
    </main>
  )
}

export default MainContent;