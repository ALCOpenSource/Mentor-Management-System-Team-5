import React from "react";
import PropTypes from "prop-types";
// import cx from "classnames";
// import styles from "./Filter.module.scss";
// import filterIcon from "@/assets/icons/filter-icon.png";

// const Filter = ({
//   searchData,
//   selectedFilterItem,
//   dropdownItems,
//   closeSideBar,
//   showCloseIcon,
//   inputPlaceholder,
//   showDropdown,
//   mode,
//   showFilterToggler,
//   reversed
// }) => {
//   const [showSearchInput, setShowSearchInput] = useState(false);
//   const [showSearchIcon, setShowSearchIcon] = useState(true);
//   const [showCustomDropdown, setShowCustomDropdown] = useState(false);
//   const [showSelectDropdown, setShowSelectDropdown] = useState(showDropdown);
//   const [showFilterIcon, setShowFilterIcon] = useState(true);
//   const [selectedFilterValue, setSelectedFilterValue] = useState("");
//   const [inputValue, setInputValue] = useState("");

//   const handleShowSearchInput = () => {
//     setShowSearchInput(true);
//     setShowSearchIcon(false);
//     setShowFilterIcon(true);
//     setShowSelectDropdown(false);
//   };

//   const handleCloseSearchInput = () => {
//     setShowSearchInput(false);
//     setShowSearchIcon(true);
//     setInputValue("");
//     searchData("");
//   };

//   const handleShowDropdown = () => {
//     setShowCustomDropdown(!showCustomDropdown);
//     handleCloseSearchInput();
//   };

//   const handleSelectedFilter = (item) => {
//     selectedFilterItem(item);
//     setShowCustomDropdown(false);
//     setShowSelectDropdown(true);
//     setSelectedFilterValue(item);
//     setShowFilterIcon(false);
//   };

//   const handleInputChange = (value) => {
//     searchData(value);
//     setInputValue(value);
//   };

//   return (
//     <div className={cx(styles.filterContainer, "flexCol")}>
//       {showSelectDropdown && (
//         <select
//           value={selectedFilterValue}
//           className={cx(styles.selectDropdown)}
//           onChange={(e) => handleSelectedFilter(e.target.value)}
//         >
//           {dropdownItems &&
//             dropdownItems.map((item, index) => (
//               <option key={index} value={item.name}>
//                 {item.name}
//               </option>
//             ))}
//         </select>
//       )}

//       {showFilterToggler && showFilterIcon && (
//         <div className={cx(styles.filterDiv, "flexCol")} style={{ order: reversed && -1 }}>
//           <img src={filterIcon} alt='filter-icon' className={cx(styles.icon)} onClick={() => handleShowDropdown()} />

//           {showCustomDropdown && (
//             <div className={cx(styles.dropdown, "flexCol")}>
//               {dropdownItems &&
//                 dropdownItems.map((item, index) => (
//                   <div
//                     key={index}
//                     className={cx(styles.dropdownItem, "flexRow-align-center")}
//                     onClick={() => handleSelectedFilter(item.name)}
//                   >
//                     <span className={cx(styles.item)}>{item.name}</span>
//                   </div>
//                 ))}
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

const Filter = () => {
  return (
    <div>
      <h1>Filter</h1>
    </div>
  );
};

Filter.propTypes = {
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

Filter.defaultProps = {
  dropdownItems: [],
  showCloseIcon: false,
  inputPlaceholder: "Search",
  showDropdown: false,
  showFilterToggler: true,
  reversed: false,
  mode: "default"
};

export default Filter;
