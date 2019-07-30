import React from 'react';

const Pagination = (props) => {
  let pageLabel = 1;
  const pageCount = props.swatches.length;
  const elementList = props.swatches.map((swatch) => {
    return <li><span className="pagination__page">{pageLabel++}</span></li>
  });
  console.log(pageLabel)
  return (
    <div id="pagination">
      {elementList}
    </div>
  )
}

export default Pagination;