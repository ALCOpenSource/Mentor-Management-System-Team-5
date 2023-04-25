import React, { useState, useEffect, useMemo } from "react";
// import { useSelector, useDispatch } from "react-redux";
import cx from "classnames";
import styles from "./Reports.module.scss";
import { useNavigate, useParams, Outlet } from "react-router-dom";

import Button from "@/components/Button/Button";
import cardIcon from "@/assets/icons/reports-overview-card-icon.svg";
import subMenuIcon from "@/assets/icons/sub-menu-icon.svg";
import emptySelectionIcon from "@/assets/icons/empty-selection-icon.svg";
import FilterAndSearch from "@/components/FilterAndSearch/FilterAndSearch";
import SelectionSideBar from "@/components/SelectionSideBar/SelectionSideBar";
import useIsMobile from "@/hooks/useIsMobile";
import SwitcherTab from "@/pages/Dashboard/Reports/SwitcherTab/SwitcherTab";
import ReportListItem from "./ReportListItem/ReportListItem";

function Reports() {
  const navigate = useNavigate();
  const params = useParams();
  const isMobile = useIsMobile();
  const [selectedMenuId, setSelectedMenuId] = useState(params.id);
  // const [showSearchInput, setShowSearchInput] = useState(false);

  // const dispatch = useDispatch();
  // const displayModal = useSelector((state) => state.modal.show);
  // const modalName = useSelector((state) => state.modal.modalName);

  useEffect(() => {
    setSelectedMenuId(params.id);
  }, [navigate, params.id]);

  const reportsCategoryArray = useMemo(
    () => [
      {
        id: 1,
        title: "Program Report",
        key: "programReport"
      },
      {
        id: 2,
        title: "Task Report",
        key: "taskReport"
      }
    ],
    []
  );

  const [activeTab, setActiveTab] = useState(reportsCategoryArray[0].key);

  const [openSideBar, setOpenSideBar] = useState({
    open: false,
    category: ""
  });

  useEffect(() => {
    isMobile
      ? setOpenSideBar({ open: false, category: "" })
      : setOpenSideBar({ open: true, category: reportsCategoryArray[0].key });
  }, [isMobile, reportsCategoryArray]);

  const programReportArray = [
    {
      id: 1,
      title: "Google Africa Scholarship",
      author: "Ibrahim Kabir",
      date: "19th - 25th Oct 23",
      icon: cardIcon
    },
    {
      id: 2,
      title: "Google Africa Scholarship",
      author: "Ibrahim Kabir",
      date: "19th - 25th Oct 23",
      icon: cardIcon
    },
    {
      id: 3,
      title: "Google Africa Scholarship",
      author: "Ibrahim Kabir",
      date: "19th - 25th Oct 23",
      icon: cardIcon
    }
  ];

  const taskReportArray = [
    {
      id: 1,
      title: "Google Africa Scholarship",
      author: "Ibrahim Kabir",
      date: "19th - 25th Oct 23",
      icon: cardIcon
    },
    {
      id: 2,
      title: "Google Africa Scholarship",
      author: "Ibrahim Kabir",
      date: "19th - 25th Oct 23",
      icon: cardIcon
    },
    {
      id: 3,
      title: "Google Africa Scholarship",
      author: "Ibrahim Kabir",
      date: "19th - 25th Oct 23",
      icon: cardIcon
    },
    {
      id: 4,
      title: "Google Africa Scholarship",
      author: "Ibrahim Kabir",
      date: "19th - 25th Oct 23",
      icon: cardIcon
    },
    {
      id: 5,
      title: "Google Africa Scholarship",
      author: "Ibrahim Kabir",
      date: "19th - 25th Oct 23",
      icon: cardIcon
    },
    {
      id: 6,
      title: "Google Africa Scholarship",
      author: "Ibrahim Kabir",
      date: "19th - 25th Oct 23",
      icon: cardIcon
    }
  ];

  const handleOpenSideBar = (e, open, category) => {
    e.preventDefault();
    setOpenSideBar({
      ...openSideBar,
      open,
      category
    });
  };

  const handleSearchInput = (e) => {
    console.log(e.target.value);
  };

  const handleSelectedFilterItem = (item) => {
    console.log(item);
  };

  const handleCloseSidebar = () => {
    setOpenSideBar({ open: false, category: "" });
  };

  const handleSelectedTab = (tab) => {
    setOpenSideBar({ open: true, category: tab.key });
    setActiveTab(tab.key);
  };

  const getListComponents = (data) => {
    const listItems = data.map((item, index) => {
      return {
        component: <ReportListItem key={index} data={item} />,
        id: item.id
      };
    });

    const headerComponent = (
      <>
        <SwitcherTab data={reportsCategoryArray} selectedTab={handleSelectedTab} activeTab={activeTab} />

        <FilterAndSearch
          closeSideBar={handleCloseSidebar}
          dropdownItems={[
            { name: "All Reports", id: 1 },
            { name: "Assigned", id: 2 },
            { name: "Completed", id: 3 }
          ]}
          searchData={handleSearchInput}
          selectedFilterItem={handleSelectedFilterItem}
          showCloseIcon={false}
          inputPlaceholder='Search for report...'
          showDropdown={true}
          showFilterToggler={false}
          reversed={true}
        />
      </>
    );

    return { listItems, headerComponent };
  };

  const handleSelectedItem = (item) => {
    console.log(item);
    setSelectedMenuId(() => {
      return item;
    });
    navigate(`report-details/${item}`);
  };

  return (
    <div className={cx(styles.reportsContainer, "flexRow")}>
      {openSideBar.open && openSideBar.category === "taskReport" ? (
        <div className={cx(styles.sideBarSection)}>
          <SelectionSideBar
            selectedMenuItem={handleSelectedItem}
            data={getListComponents(taskReportArray)}
            activeClassName='active-report-item'
          />
        </div>
      ) : openSideBar.open && openSideBar.category === "programReport" ? (
        <div className={cx(styles.sideBarSection)}>
          <SelectionSideBar
            selectedMenuItem={handleSelectedItem}
            data={getListComponents(programReportArray)}
            activeClassName='active-report-item'
          />
        </div>
      ) : null}

      <div className={cx(styles.content, "flexCol")}>
        <div className={cx(styles.heading, "flexRow")}>
          <div className={cx(styles.togglerDiv, "flexCol-fully-centered")}>
            <img
              className={cx(styles.toggler)}
              src={subMenuIcon}
              alt='toggler'
              onClick={(e) => handleOpenSideBar(e, true, reportsCategoryArray[0].key)}
            />
            <small className={cx(styles.togglerText)}>MENU</small>
          </div>
          <Button onClick={() => navigate("create-report")} title='Compose Report' />
        </div>

        <div style={{ height: selectedMenuId ? "auto" : "100%" }} className={cx(styles.contentBody, "flexCol")}>
          {selectedMenuId ? (
            <Outlet />
          ) : (
            <div className={cx(styles.emptySelectionDiv, "flexCol-fully-centered")}>
              <img src={emptySelectionIcon} alt='empty-selection-icon' />
              <p>No item selected yet </p>
              <p>Select an item from the list to view report details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Reports;
