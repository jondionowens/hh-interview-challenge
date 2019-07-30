import React from 'react';

const Pagination = (props) => {
  let pageLabel = 1;
  let keys = 1;
  const elementList = [];

  for (let i = 0; i < props.totalPages; i++) {
    elementList.push(<li key={keys++} className="pagination__page" onClick={props.handleChangePage}>{pageLabel++}</li>)
  }

  return (
    <div id="pagination">
      {elementList}
    </div>
  )
}

export default Pagination;