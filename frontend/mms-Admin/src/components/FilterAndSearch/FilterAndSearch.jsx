import React, { useState } from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import styles from "./FilterAndSearch.module.scss";

import searchIcon from "@/assets/icons/search-icon-green.png";
import filterIcon from "@/assets/icons/filter-icon.png";
import closeIcon from "@/assets/icons/close-icon.png";

function FilterAndSearch({
  searchData,
  selectedFilterItem,
  dropdownItems,
  closeSideBar,
  showCloseIcon,
  inputPlaceholder,
  showDropdown,
  mode,
  showFilterToggler,
  reversed
}) {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [showSearchIcon, setShowSearchIcon] = useState(true);
  const [showCustomDropdown, setShowCustomDropdown] = useState(false);
  const [showSelectDropdown, setShowSelectDropdown] = useState(showDropdown);
  const [showFilterIcon, setShowFilterIcon] = useState(true);
  const [selectedFilterValue, setSelectedFilterValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleShowSearchInput = () => {
    setShowSearchInput(true);
    setShowSearchIcon(false);
    setShowFilterIcon(true);
    setShowSelectDropdown(false);
  };

  const handleCloseSearchInput = () => {
    setShowSearchInput(false);
    setShowSearchIcon(true);
    setInputValue("");
    searchData("");
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

  const handleInputChange = (value) => {
    searchData(value);
    setInputValue(value);
  };

  return (
    <div
      className={cx(styles.filterAndSearchContainer, "flexRow-align-center")}
      style={reversed ? { flexDirection: "row-reverse", justifyContent: "space-between" } : { flexDirection: "row" }}
    >
      <div
        className={cx(styles.inputDiv, "flexRow-align-center")}
        style={{
          display: mode === "search" ? "flex" : showSearchInput ? "flex" : "none",
          flexDirection: reversed && "row"
        }}
      >
        <img src={searchIcon} alt='search-icon' className={cx(styles.icon)} />
        <input
          value={inputValue}
          onChange={(e) => handleInputChange(e.target.value)}
          className={cx(styles.searchInput)}
          type='text'
          placeholder={inputPlaceholder}
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

      {mode === "default" && (
        <>
          {showSearchIcon && (
            <img
              src={searchIcon}
              alt='search-icon'
              className={cx(styles.icon)}
              onClick={() => handleShowSearchInput()}
            />
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

          {showFilterToggler && showFilterIcon && (
            <div className={cx(styles.filterDiv, "flexCol")} style={{ order: reversed && -1 }}>
              <img
                src={filterIcon}
                alt='filter-icon'
                className={cx(styles.icon)}
                onClick={() => handleShowDropdown()}
              />

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

          {showCloseIcon && <img src={closeIcon} alt='close-icon' className={cx(styles.icon)} onClick={closeSideBar} />}
        </>
      )}
    </div>
  );
}

FilterAndSearch.propTypes = {
  searchData: PropTypes.func,
  selectedFilterItem: PropTypes.func,
  dropdownItems: PropTypes.array,
  closeSideBar: PropTypes.func,
  showCloseIcon: PropTypes.bool,
  inputPlaceholder: PropTypes.string,
  showDropdown: PropTypes.bool,
  showFilterToggler: PropTypes.bool,
  reversed: PropTypes.bool,
  mode: PropTypes.string
};

FilterAndSearch.defaultProps = {
  dropdownItems: [],
  showCloseIcon: false,
  inputPlaceholder: "Search",
  showDropdown: false,
  showFilterToggler: true,
  reversed: false,
  mode: "default"
};

export default FilterAndSearch;
