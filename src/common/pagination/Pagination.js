import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ handlePagination }) => {
  return (
    <div class="row mt-20">
      <div class="col">
        <ul class="page-pagination">
          <li>
            <Link onClick={handlePagination}>
              <i class="fa fa-angle-left"></i> Prev
            </Link>
          </li>
          {[...new Array(5)].map((link, index) => (
            <li class="active">
              <Link onClick={handlePagination}>0{++index}</Link>
            </li>
          ))}
          <li>
            <Link onClick={handlePagination}>
              <i class="fa fa-angle-right"></i> Next
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
