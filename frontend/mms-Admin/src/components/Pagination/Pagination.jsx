import React from "react";
import cx from "classnames";
import styles from "./Pagination.module.scss";
// import PropTypes from "prop-types";

import navigateFirst from "@/assets/icons/pagination-left-arrow.svg";
import navigateLast from "@/assets/icons/pagination-right-arrow.svg";
import nextPage from "@/assets/icons/pagination-next-arrow.svg";
import previousPage from "@/assets/icons/pagination-previous-arrow.svg";

function Pagination() {
  return (
    <div className={cx(styles.paginationContainer, "flexRow-align-center")}>
      <div className={cx(styles.btnGroup, "flexRow-align-center")}>
        <img src={navigateFirst} alt='navigate first' />
        <img src={previousPage} alt='previous page' />
      </div>
      <div className={cx(styles.pageData)}>
        <span>1-10 of 10</span>
      </div>
      <div className={cx(styles.btnGroup, "flexRow-align-center")}>
        <img src={nextPage} alt='previous page' />
        <img src={navigateLast} alt='navigate first' />
      </div>
    </div>
  );
}

// Pagination.propTypes = {};

// Pagination.defaultProps = {};

export default Pagination;
