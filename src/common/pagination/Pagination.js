import React from "react";

const Pagination = ({ pagination, dispatch }) => {
  return (
    <div class="row mt-20">
      <div class="col">
        <ul class="page-pagination">
          <li>
            <button onClick={() => dispatch("prev")}>
              <i className="fa fa-angle-left"></i> Prev
            </button>
          </li>
          {pagination.paginate}
          <li>
            <button onClick={() => dispatch("next")}>
              <i className="fa fa-angle-right"></i>
              Next
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
