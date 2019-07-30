import React from 'react';

const Pagination = (props) => {
  let pageLabel = 1;
  let keys = 1;
  const elementList = [];

  for (let i = 0; i < props.totalPages; i++) {
    elementList.push(<li key={keys++} onClick={(e) => props.handleChangePage(e, i+1)} className="pagination__page">{pageLabel++}</li>)
  }

  return (
    <div id="pagination">
      {elementList}
    </div>
  )
}

export default Pagination;