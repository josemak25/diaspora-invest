import React from 'react';

import { NEXT_PROPERTIES, PREVIOUS_PROPERTIES } from '../../redux/types';

const Pagination = ({ pagination, dispatch, formState }) => {
  return (
    <div className="row mt-20">
      <div className="col">
        <ul className="page-pagination">
          <li>
            <button onClick={() => dispatch({ type: PREVIOUS_PROPERTIES, payload: pagination })}>
              <i className="fa fa-angle-left"></i> Prev
            </button>
          </li>
          <li>
            <button onClick={() => dispatch({ type: NEXT_PROPERTIES, payload: pagination })}>
              Next
              <i className="fa fa-angle-right"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
