import React from "react";
import cx from "classnames";
import styles from "./SearchResults.module.scss";

import Pagination from "@/components/Pagination/Pagination";
import BorderlessDropDownList from "@/components/BorderlessDropDownList/BorderlessDropDownList";
import ResultListItem from "./ResultListItem/ResultListItem";
import { ReactComponent as taskIcon } from "@/assets/icons/tasks-overview-card-icon.svg";
import { ReactComponent as programIcon } from "@/assets/icons/google-filled-icon.svg";
import { ReactComponent as reportIcon } from "@/assets/icons/reports-overview-card-icon.svg";
import { ReactComponent as certificateIcon } from "@/assets/icons/certificate-thumbnail.svg";
import { ReactComponent as CalendarIcon } from "@/assets/icons/tasks-overview-calendar-icon.svg";
import { ReactComponent as ClockIcon } from "@/assets/icons/clock-icon.svg";

function SearchResults() {

  const dropdownArray = ["All", "All"]; 
  const [selected, setSelected] = useState("All");
  const searchResultsArray = [
    {
      id: 1,
      title: "Google Africa Scholarship Program",
      date: "Dec 12, 2022",
      time: "6:00pm",
      icon: programIcon,
      ClockIcon,
      CalendarIcon,
      source: "Programs"
    },
    {
      id: 2,
      title: "Google Africa Scholarship Program",
      date: "3 Days from now",
      icon: taskIcon,
      CalendarIcon,
      source: "Tasks"
    },
    {
      id: 3,
      title: "Google Africa Scholarship",
      author: "Ibrahim Kabir",
      date: "19th - 25th Oct 23",
      icon: reportIcon,
      source: "Reports"
    },
    {
      id: 4,
      title: "GADS CLOUD 2022 - COMPLETION",
      icon: certificateIcon,
      source: "Certificates"
    },
    {
      id: 5,
      title: "Google Africa Scholarship Program",
      date: "Dec 12, 2022",
      time: "6:00pm",
      icon: programIcon,
      ClockIcon,
      CalendarIcon,
      source: "Programs"
    },
    {
      id: 6,
      title: "Google Africa Scholarship Program",
      date: "3 Days from now",
      icon: taskIcon,
      CalendarIcon,
      source: "Tasks"
    },
    {
      id: 7,
      title: "Google Africa Scholarship",
      author: "Ibrahim Kabir",
      date: "19th - 25th Oct 23",
      icon: reportIcon,
      source: "Reports"
    },
    {
      id: 8,
      title: "GADS CLOUD 2022 - COMPLETION",
      icon: certificateIcon,
      source: "Certificates"
    },
    {
      id: 9,
      title: "Google Africa Scholarship Program",
      date: "Dec 12, 2022",
      time: "6:00pm",
      icon: programIcon,
      ClockIcon,
      CalendarIcon,
      source: "Programs"
    },
    {
      id: 10,
      title: "Google Africa Scholarship Program",
      date: "3 Days from now",
      icon: taskIcon,
      CalendarIcon,
      source: "Tasks"
    }
  ];

  const handleSelected = (itemSelected) => {
    setSelected(itemSelected);
    
  }

  return (
    <div className={cx(styles.searchResultsContainer, "flexCol")}>
      <section className={cx(styles.heading)}>
        <div className={cx(styles.titleWrapper, "flexRow")}>
          <h3 className={cx(styles.title)}>Search results</h3>
        </div>
        <div className={cx(styles.controlsWrapper, "flexRow-space-between")}>
          <div className={cx(styles.dropdownWrapper, "flexRow-left-centered")}>
            <BorderlessDropDownList
              menu = {dropdownArray} 
              selectedRecipient={selected}
              setSelectedRecipient={handleSelected} />
          </div>
          <div className={cx(styles.paginationWrapper, "flexRow-right-centered")}>
            <Pagination />
          </div>
        </div>
      </section>
      <section className={cx(styles.body, "flexRow")}>
        <div className={cx(styles.content, "flexCol")}>
          {searchResultsArray.map((item, index) => {
            return <ResultListItem key={index} data={item} />;
          })}
        </div>
      </section>
    </div>
  );
}

export default SearchResults;
