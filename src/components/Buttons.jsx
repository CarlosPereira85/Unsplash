import React from 'react';

const Buttons = ({ page, totalPages, nextPage, prevPage }) => {
  return (
    <aside>
      {page > 1 && <button onClick={prevPage}>Previous Page</button>}
      {page !== totalPages && <button onClick={nextPage}>Next Page</button>}
    </aside>
  );
};

export default Buttons;
