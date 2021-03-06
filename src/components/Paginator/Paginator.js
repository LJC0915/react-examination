import React from "react";
import styles from "./Paginator.scss";
import PropTypes from "prop-types";
import { range } from "lodash";

export const Paginator = ({ currentPage, totalPage, changePage }) => {
  let pageButtons = [];

  if (totalPage <= 5 || currentPage <= 3) {
    pageButtons = range(1, Math.min(totalPage, 5) + 1);
  } else if (currentPage > 3 && totalPage - currentPage > 2) {
    pageButtons = range(currentPage - 2, currentPage + 3);
  } else {
    pageButtons = range(totalPage - 4, totalPage + 1);
  }

  const onClickPage = page => {
    changePage(page);
  };

  return (
    <div className={styles.wrap}>
      <div>
        <button
          className={`btn btn-default ${styles.btnAction}`}
          disabled={currentPage <= 1}
          onClick={() => onClickPage(currentPage - 1)}
        >
          Prev
        </button>
      </div>
      <div>
        {pageButtons.map((page, index) => (
          <button
            key={index}
            className={`btn ${
              currentPage === page ? "btn-primary" : "btn-default"
            } ${styles.btnAction}`}
            onClick={() => onClickPage(page)}
          >
            {page}
          </button>
        ))}
      </div>
      <div>
        <button
          className={`btn btn-default ${styles.btnAction}`}
          disabled={currentPage === totalPage}
          onClick={() => onClickPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

Paginator.propTypes = {
  changePage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPage: PropTypes.number.isRequired
};
