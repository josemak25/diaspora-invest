import React from "react";

const Pagination = ({ pagination, dispatch }) => {
  return (
    <div className="row mt-20">
      <div className="col">
        <ul className="page-pagination">
          <li>
            <button onClick={() => dispatch("prev")}>
              <i className="fa fa-angle-left"></i> Prev
            </button>
          </li>
          <li>
            <button onClick={() => dispatch("next")}>
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
