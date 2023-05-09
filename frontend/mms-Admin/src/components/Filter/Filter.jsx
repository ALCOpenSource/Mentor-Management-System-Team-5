import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./Filter.module.scss";
import filterIcon from "@/assets/icons/filter-icon.png";

const Filter = ({ selectedFilterItem, dropdownItems, closeSearchInput, closeSelectElement, setCloseSelectElement }) => {
  const [showCustomDropdown, setShowCustomDropdown] = useState(false);
  const [showSelectDropdown, setShowSelectDropdown] = useState(false);
  const [showFilterIcon, setShowFilterIcon] = useState(true);
  const [selectedFilterValue, setSelectedFilterValue] = useState("");

  useEffect(() => {
    if (closeSelectElement) {
      setShowCustomDropdown(false);
      setShowSelectDropdown(false);
      setShowFilterIcon(true);
      setSelectedFilterValue("");
      setCloseSelectElement(false);
    }
  }, [closeSelectElement, setCloseSelectElement]);

  const handleShowCustomDropdown = () => {
    closeSearchInput(true);
    setShowCustomDropdown(!showCustomDropdown);
    setShowSelectDropdown(false);
  };

  const handleCustomDropdownClick = (item) => {
    selectedFilterItem(item);
    setShowCustomDropdown(false);
    setShowSelectDropdown(true);
    setSelectedFilterValue(item);
    setShowFilterIcon(false);
  };

  const handleSelectDropdownClick = (value) => {
    selectedFilterItem(value);
    setSelectedFilterValue(value);
  };

  return (
    <div className={cx(styles.filterContainer, "flexCol")}>
      {showSelectDropdown && (
        <select
          value={selectedFilterValue}
          className={cx(styles.selectDropdown)}
          onChange={(e) => handleSelectDropdownClick(e.target.value)}
        >
          {dropdownItems &&
            dropdownItems.map((item, index) => (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            ))}
        </select>
      )}

      {showFilterIcon && (
        <div className={cx(styles.filterDiv, "flexCol")}>
          <img
            src={filterIcon}
            alt='filter-icon'
            className={cx(styles.icon)}
            onClick={() => handleShowCustomDropdown()}
          />

          {showCustomDropdown && (
            <div className={cx(styles.dropdown, "flexCol")}>
              {dropdownItems &&
                dropdownItems.map((item, index) => (
                  <div
                    key={index}
                    className={cx(styles.dropdownItem, "flexRow-align-center")}
                    onClick={() => handleCustomDropdownClick(item.name)}
                  >
                    <span className={cx(styles.item)}>{item.name}</span>
                  </div>
                ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

Filter.propTypes = {
  selectedFilterItem: PropTypes.func,
  dropdownItems: PropTypes.array,
  showDropdown: PropTypes.bool,
  showFilterIcon: PropTypes.bool,
  closeSearchInput: PropTypes.func,
  closeSelectElement: PropTypes.bool,
  setCloseSelectElement: PropTypes.func
};

Filter.defaultProps = {
  dropdownItems: [],
  showDropdown: false,
  showFilterIcon: true,
  closeSearchInput: () => {},
  closeSelectElement: false,
  setCloseSelectElement: () => {}
};

export default Filter;
