import React, { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import cx from "classnames";
import styles from "./Reports.module.scss";
import { useNavigate, useParams, Outlet } from "react-router-dom";

// import Button from "@/components/Button/Button";
import cardIcon from "@/assets/icons/reports-overview-card-icon.svg";
import subMenuIcon from "@/assets/icons/sub-menu-icon.svg";
import emptySelectionIcon from "@/assets/icons/empty-selection-icon.svg";
import closeIcon from "@/assets/icons/undo-icon.svg";
import Search from "@/components/Search/Search";
import Filter from "@/components/Filter/Filter";
import SelectionSideBar from "@/components/SelectionSideBar/SelectionSideBar";
import useIsMobile from "@/hooks/useIsMobile";
import SwitcherTab from "@/pages/Dashboard/Reports/SwitcherTab/SwitcherTab";
import ReportListItem from "./ReportListItem/ReportListItem";
import { getAllReports, getYearlyReports, getMonthlyReports } from "@/redux/Reports/ReportsSlice";

function Reports() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const isMobile = useIsMobile();
  const [selectedMenuId, setSelectedMenuId] = useState(params.id);

  // const displayModal = useSelector((state) => state.modal.show);
  // const modalName = useSelector((state) => state.modal.modalName);
  const allReportsData = useSelector((state) => state.reports.getAllReportsData);
  const programReportArray = useSelector((state) => state.reports.getYearlyReportsData);
  const taskReportArray = useSelector((state) => state.reports.getMonthlyReportsData);
  console.log(programReportArray, "all reports data");
  // console.log(yearlyReportsData, "yearly reports data");

  useEffect(() => {
    dispatch(getAllReports());
    dispatch(getYearlyReports());
    dispatch(getMonthlyReports());
    setSelectedMenuId(params.id);
  }, [navigate, dispatch, params.id]);

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

  const programReportArrayOld = [
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

  const taskReportArrayOld = [
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

  const handleCloseSideBar = () => {
    setOpenSideBar({ open: false, category: "" });
  };

  const handleSelectedTab = (tab) => {
    setOpenSideBar({ open: true, category: tab.key });
    setActiveTab(tab.key);
  };

  const [collapseInput, setCollapseInput] = useState(false);
  const [closeSelectElement, setCloseSelectElement] = useState(false);

  const handleCloseSearchInput = (e) => {
    console.log(e, "handle close input");
    setCollapseInput(true);
  };

  const handleCloseSelectElement = (e) => {
    console.log(e, "handle close select");
    setCloseSelectElement(true);
  };
  const getListComponents = (data) => {
    console.log(data, "list comp data");
    const listItems = data.map((item, index) => {
      return {
        component: <ReportListItem key={index} data={item} />,
        id: item.id
      };
    });

    const headerComponent = (
      <div className={cx(styles.sideBarHeader, "flexCol")}>
        <SwitcherTab data={reportsCategoryArray} selectedTab={handleSelectedTab} activeTab={activeTab} />

        <div className={cx(styles.searchAndFilterDiv, "flexRow")}>
          <div className={cx(styles.searchWrapper)}>
            <Search
              inputPlaceholder='Search for tasks...'
              onChange={handleSearchInput}
              collapseInput={collapseInput}
              setCollapseInput={setCollapseInput}
              closeSelectElement={handleCloseSelectElement}
            />
          </div>

          <Filter
            dropdownItems={[
              { name: "All Reports", id: 1 },
              { name: "Assigned", id: 2 },
              { name: "Completed", id: 3 }
            ]}
            selectedFilterItem={handleSelectedFilterItem}
            closeSearchInput={handleCloseSearchInput}
            closeSelectElement={closeSelectElement}
            setCloseSelectElement={setCloseSelectElement}
          />

          {isMobile && (
            <img
              onClick={() => setOpenSideBar(!openSideBar)}
              src={closeIcon}
              className={cx(styles.closeIcon)}
              alt='close-icon'
            />
          )}
        </div>
      </div>
    );

    return { listItems, headerComponent };
  };

  const handleSelectedItem = (item) => {
    console.log(item);
    setSelectedMenuId(() => {
      return item;
    });
    isMobile && handleCloseSideBar();
    navigate(`report-details/${item}`);
  };

  console.log(selectedMenuId, "selectedMenuId");

  return (
    <div className={cx(styles.reportsContainer, "flexRow")}>
      {openSideBar.open && openSideBar.category === "taskReport" ? (
        Array.isArray(taskReportArray) && taskReportArray.length > 0 ? (
          <div className={cx(styles.sideBarSection)}>
            <SelectionSideBar
              selectedMenuItem={handleSelectedItem}
              data={getListComponents(taskReportArray)}
              activeClassName='active-report-item'
            />
          </div>
        ) : (
          <div className={cx(styles.sideBarSection)}>No Data Found</div>
        )
      ) : openSideBar.open && openSideBar.category === "programReport" ? (
        Array.isArray(programReportArray) && programReportArray.length > 0 ? (
          <div className={cx(styles.sideBarSection)}>
            <SelectionSideBar
              selectedMenuItem={handleSelectedItem}
              data={getListComponents(programReportArray)}
              activeClassName='active-report-item'
            />
          </div>
        ) : (
          <div className={cx(styles.sideBarSection)}>No Data Found</div>
        )
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
          {/* <Button onClick={() => navigate("create-report")} title='Compose Report' /> */}
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
