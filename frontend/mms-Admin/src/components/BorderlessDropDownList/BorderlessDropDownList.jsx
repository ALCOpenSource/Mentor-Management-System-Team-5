import React, { useState } from "react";
import { ReactComponent as TogglerIcon } from "@/assets/icons/caret-down-icon.svg";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./BorderlessDropDownList.module.scss";

const CustomDropDownList = ({ menu, selectedRecipient, setSelectedRecipient }) => {
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
          <div className={cx(styles.selectedText)}>{selectedRecipient}</div>
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
                  setSelectedRecipient(menuItem);
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

CustomDropDownList.propTypes = {
  menu: PropTypes.array,
  selectedRecipient: PropTypes.string,
  setSelectedRecipient: PropTypes.func
};

export default CustomDropDownList;
