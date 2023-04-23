import React, { useState } from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import styles from "./FilterAndSearch.module.scss";

import searchIcon from "@/assets/icons/search-icon-green.png";
import filterIcon from "@/assets/icons/filter-icon.png";
import closeIcon from "@/assets/icons/close-icon.png";

function FilterAndSearch({ searchData, selectedFilterItem, dropdownItems, closeSideBar }) {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [showSearchIcon, setShowSearchIcon] = useState(true);
  const [showCustomDropdown, setShowCustomDropdown] = useState(false);
  const [showSelectDropdown, setShowSelectDropdown] = useState(false);
  const [showFilterIcon, setShowFilterIcon] = useState(true);
  const [selectedFilterValue, setSelectedFilterValue] = useState("");

  const handleShowSearchInput = () => {
    setShowSearchInput(true);
    setShowSearchIcon(false);
    setShowFilterIcon(true);
    setShowSelectDropdown(false);
  };

  const handleCloseSearchInput = () => {
    setShowSearchInput(false);
    setShowSearchIcon(true);
  };

  const handleShowDropdown = () => {
    setShowCustomDropdown(!showCustomDropdown);
    handleCloseSearchInput();
  };

  const handleSelectedFilter = (item) => {
    selectedFilterItem(item);
    setShowCustomDropdown(false);
    setShowSelectDropdown(true);
    setSelectedFilterValue(item);
    setShowFilterIcon(false);
  };

  return (
    <div className={cx(styles.filterAndSearchContainer, "flexRow-align-center")}>
      <div
        className={cx(styles.inputDiv, "flexRow-align-center")}
        style={{ visibility: showSearchInput ? "visible" : "hidden" }}
      >
        <img src={searchIcon} alt='search-icon' className={cx(styles.icon)} />
        <input
          onChange={searchData}
          className={cx(styles.searchInput)}
          type='text'
          placeholder='Search for mentor...'
        />

        <img
          src={closeIcon}
          alt='close-icon'
          className={cx(styles.icon)}
          onClick={() => {
            handleCloseSearchInput();
            setShowSelectDropdown(true);
          }}
        />
      </div>

      {showSearchIcon && (
        <img src={searchIcon} alt='search-icon' className={cx(styles.icon)} onClick={() => handleShowSearchInput()} />
      )}

      {showSelectDropdown && (
        <select
          value={selectedFilterValue}
          className={cx(styles.selectDropdown)}
          onChange={(e) => handleSelectedFilter(e.target.value)}
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
          <img src={filterIcon} alt='filter-icon' className={cx(styles.icon)} onClick={() => handleShowDropdown()} />

          {showCustomDropdown && (
            <div className={cx(styles.dropdown, "flexCol")}>
              {dropdownItems &&
                dropdownItems.map((item, index) => (
                  <div
                    key={index}
                    className={cx(styles.dropdownItem, "flexRow-align-center")}
                    onClick={() => handleSelectedFilter(item.name)}
                  >
                    <span className={cx(styles.item)}>{item.name}</span>
                  </div>
                ))}
            </div>
          )}
        </div>
      )}

      <img src={closeIcon} alt='close-icon' className={cx(styles.icon)} onClick={closeSideBar} />
    </div>
  );
}

FilterAndSearch.propTypes = {
  searchData: PropTypes.func,
  selectedFilterItem: PropTypes.func,
  dropdownItems: PropTypes.array,
  closeSideBar: PropTypes.func
};

export default FilterAndSearch;
