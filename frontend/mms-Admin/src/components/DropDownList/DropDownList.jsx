import React, { useState } from "react";
import { ReactComponent as TogglerIcon } from "@/assets/icons/archive-toggler-icon.svg";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./DropDownList.module.scss";

const DropDownList = ({ menu, selectedReceipent, setSelectedReceipent }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  const rotateStyle = {
    transform: open ? "rotate(180deg)" : "",
    transition: "all 0.25s"
  };

  return (
    <div className={cx(styles.dropdownContainer)}>
      <button className={cx(styles.dropdownButton)} onClick={handleOpen}>
        <div className={cx(styles.dropdownText)}>
          <div>{selectedReceipent}</div>
          <div>
            <TogglerIcon style={rotateStyle} />
          </div>
        </div>
      </button>
      {open ? (
        <ul className={cx(styles.menu)}>
          {menu.map((menuItem, index) => (
            <li key={index} className={cx(styles.menuItem)}>
              <button
                onClick={() => {
                  handleOpen();
                  setSelectedReceipent(menuItem);
                }}
              >
                {menuItem}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

DropDownList.propTypes = {
  menu: PropTypes.array,
  selectedReceipent: PropTypes.string,
  setSelectedReceipent: PropTypes.func
};

export default DropDownList;
