import React from "react";
import cx from "classnames";
import styles from "./Loader.module.scss";
import PropTypes from "prop-types";

const Loader = ({ small }) => (
  <div className={cx(styles.loaderContainer, "flexRow-fully-centered")}>
    <div className={small ? cx(styles.smallSpinner, styles.spinner) : cx(styles.bigSpinner, styles.spinner)} />
  </div>
);

Loader.propTypes = {
  small: PropTypes.bool
};

Loader.defaultProps = {
  small: true
};

export default Loader;
