import React, { useState, useEffect } from "react";
import cx from "classnames";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import styles from "./Certificates.module.scss";
import GenericSideBar from "@/components/GenericSideBar/GenericSideBar";
import Button from "@/components/Button/Button";
import certificateIcon from "@/assets/icons/certificate-thumbnail.svg";
import backIcon from "@/assets/icons/close-icon.svg";
import subMenuIcon from "@/assets/icons/sub-menu-icon.svg";
import approvedCertificateIcon from "@/assets/icons/new-entries-icon.svg";
import generatedCertificateIcon from "@/assets/icons/blog-post-icon.svg";
import RecentListItem from "./RecentListItem/RecentListItem";
import CategoryListItem from "./CategoryListItem/CategoryListItem";
import useIsMobile from "@/hooks/useIsMobile";
import Search from "@/components/Search/Search";
import Filter from "@/components/Filter/Filter";
import Pagination from "@/components/Pagination/Pagination";

function Certificates() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const currentSubPath = useLocation().pathname.split("/")[3];
  const [openSideBar, setOpenSideBar] = useState(false);
  const [outletTitle, setOutletTitle] = useState("Approved Certificates");
  const [showGenerateButton, setShowGenerateButton] = useState(true);

  useEffect(() => {
    isMobile ? setOpenSideBar(false) : setOpenSideBar(true);
  }, [isMobile]);

  useEffect(() => {
    if (currentSubPath === "pending-certificates") {
      setOutletTitle("Certificates Pending Approval");
      setShowGenerateButton(false);
    } else if (currentSubPath === "generated-certificates") {
      setOutletTitle("Generated Certificates");
      setShowGenerateButton(true);
    } else {
      setOutletTitle("Approved Certificates");
      setShowGenerateButton(true);
    }
  }, [currentSubPath]);

  const [collapseInput, setCollapseInput] = useState(true);
  const [closeSelectElement, setCloseSelectElement] = useState(false);

  const recentDataArray = [
    {
      id: 1,
      title: "Room Library Article Written in Java",
      description: "GADS CLOUD 2022 - COMPLETION",
      icon: certificateIcon
    },
    {
      id: 2,
      title: "Room Library Article Written in Java",
      description: "GADS CLOUD 2022 - COMPLETION",
      icon: certificateIcon
    },
    {
      id: 3,
      title: "Room Library Article Written in Java",
      description: "GADS CLOUD 2022 - COMPLETION",
      icon: certificateIcon
    },
    {
      id: 4,
      title: "Room Library Article Written in Java",
      description: "GADS CLOUD 2022 - COMPLETION",
      icon: certificateIcon
    },
    {
      id: 5,
      title: "Room Library Article Written in Java",
      description: "GADS CLOUD 2022 - COMPLETION",
      icon: certificateIcon
    }
  ];

  console.log(currentSubPath, "current sub path");

  const handleCloseSearchInput = (e) => {
    console.log(e, "handle close input");
    setCollapseInput(true);
  };

  const handleCloseSelectElement = (e) => {
    console.log(e, "handle close select");
    setCloseSelectElement(true);
  };

  const handleCategoryClick = (item) => {
    console.log(item, "handle category click");
    setOutletTitle(item.title);
    setShowGenerateButton(true);
    navigate(item.path);
  };

  const handlePendingClick = () => {
    console.log("handle pending click");
    setOutletTitle("Certificates Pending Approval");
    setShowGenerateButton(false);
    navigate("/dashboard/certificates/pending-certificates");
  };

  const handleRecentListClick = (item) => {
    console.log(item, "handle recent list click");
    setOutletTitle("Certificate Details");
    navigate(`/dashboard/certificates/certificate-details/${item.id}`);
  };

  const getSideBarData = () => {
    let categoryData = [
      {
        id: 1,
        title: "Approved Certificates",
        icon: approvedCertificateIcon,
        count: 290,
        selected: true,
        path: "/dashboard/certificates/approved-certificates"
      },
      {
        id: 2,
        title: "My Generated Certificates",
        icon: generatedCertificateIcon,
        count: 300,
        selected: false,
        path: "/dashboard/certificates/generated-certificates"
      }
    ];

    let listItems = [
      {
        component: (
          <div className={cx(styles.topSection, "flexCol")}>
            <h3 className={cx(styles.title)}>Category</h3>
            {categoryData.map((item, index) => {
              return <CategoryListItem onClick={handleCategoryClick} key={index} data={item} />;
            })}
            <div
              onClick={() => handlePendingClick()}
              className={cx(
                styles.pendingDiv,
                "flexRow-space-between",
                currentSubPath === "pending-certificates" && styles.active
              )}
            >
              <p>Certificates pending approval</p>
              <span>500</span>
            </div>
          </div>
        ),
        id: 1
      },
      {
        component: (
          <div className={cx(styles.bottomSection, "flexCol")}>
            <h3 className={cx(styles.title)}>Recent</h3>
            <div className={cx(styles.listWrapper, "flexCol")}>
              {recentDataArray.map((item, index) => {
                return <RecentListItem key={index} data={item} onClick={handleRecentListClick} />;
              })}
            </div>
          </div>
        ),
        id: 2
      }
    ];

    const headerComponent = isMobile && (
      <div className={cx(styles.sideBarHeader, "flexRow-align-center")}>
        <div
          style={{ display: !isMobile && !collapseInput ? "none" : "flex" }}
          className={cx(styles.titleDiv, "flexRow-space-between")}
        >
          {isMobile && <h3 className={cx(styles.title)}>Certificates</h3>}
          {isMobile && (
            <img
              onClick={() => setOpenSideBar(!openSideBar)}
              src={backIcon}
              className={cx(styles.backIcon)}
              alt='close-icon'
            />
          )}
        </div>
      </div>
    );

    return { listItems, headerComponent };
  };

  const handleSearchInput = (data) => {
    console.log(data);
  };

  const handleSelectedFilterItem = (item) => {
    console.log(item);
  };

  return (
    <div className={cx(styles.certificatesContainer, "flexRow")}>
      {openSideBar && (
        <div className={cx(styles.sidebarWrapper)}>
          <GenericSideBar
            data={getSideBarData()}
            activeMenuItemClass='active-task-item'
            closeGenericSideBar={() => setOpenSideBar(false)}
          />
        </div>
      )}

      <section className={cx(styles.mainBody, "flexCol")}>
        <section className={cx(styles.heading, "flexRow-space-between")}>
          <div className={cx(styles.titleAndToggler, "flexRow")}>
            <div className={cx(styles.togglerDiv, "flexCol-fully-centered")}>
              <img
                className={cx(styles.toggler)}
                src={subMenuIcon}
                alt='toggler'
                onClick={() => setOpenSideBar(!openSideBar)}
              />
              <small className={cx(styles.togglerText)}>MENU</small>
            </div>
            <h3 className={cx(styles.title)}>{outletTitle}</h3>
          </div>
          {showGenerateButton && <Button title='Generate new certificate' size='small' onClick={() => navigate("#")} />}
          <div className={cx(styles.paginationAndSearchDiv, "flexRow")}>
            {collapseInput && (
              <div className={cx(styles.paginationWrapper)}>
                <Pagination />
              </div>
            )}
            <div className={cx(styles.searchWrapper)}>
              <Search
                inputPlaceholder='Search for certificates...'
                onChange={handleSearchInput}
                collapseInput={collapseInput}
                setCollapseInput={setCollapseInput}
                closeSelectElement={handleCloseSelectElement}
              />
            </div>
            <div className={cx(styles.filterWrapper)}>
              <Filter
                dropdownItems={[
                  { name: "All", id: 1 },
                  { name: "Completed", id: 2 },
                  { name: "In-progress", id: 3 }
                ]}
                selectedFilterItem={handleSelectedFilterItem}
                closeSearchInput={handleCloseSearchInput}
                closeSelectElement={closeSelectElement}
                setCloseSelectElement={setCloseSelectElement}
              />
            </div>
          </div>
        </section>

        <div className={cx(styles.content)}>
          <Outlet />
        </div>
      </section>
    </div>
  );
}

export default Certificates;
