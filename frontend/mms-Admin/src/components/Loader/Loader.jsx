import React from "react";
import cx from "classnames";
import styles from "./Loader.module.scss";
import PropTypes from "prop-types";

const Loader = ({ small, fullPage }) => (
  <div className={cx(styles.loaderContainer, fullPage && styles.fullPage, "flexRow-fully-centered")}>
    <div className={cx(small ? styles.smallSpinner : styles.bigSpinner, styles.spinner)} />
  </div>
);

Loader.propTypes = {
  small: PropTypes.bool,
  fullPage: PropTypes.bool
};

Loader.defaultProps = {
  small: false,
  fullPage: true
};

export default Loader;
