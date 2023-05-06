import React, { useState } from "react";
import cx from "classnames";
import { useLocation, Outlet } from "react-router-dom";
import styles from "./Settings.module.scss";
import SettingsSideBar from "@/components/SettingsSideBar/SettingsSideBar";
import Pagination from "@/components/Pagination/Pagination";
import Search from "@/components/Search/Search";

import { ReactComponent as GeneralIcon } from "@/assets/icons/settings-general-icon.svg";
import { ReactComponent as PasswordIcon } from "@/assets/icons/settings-password-icon.svg";
import { ReactComponent as NotificationIcon } from "@/assets/icons/settings-notification-icon.svg";
import { ReactComponent as PrivacyIcon } from "@/assets/icons/settings-privacy-icon.svg";
import { ReactComponent as ArchiveIcon } from "@/assets/icons/settings-archive-icon.svg";
import { ReactComponent as SupportIcon } from "@/assets/icons/settings-support-icon.svg";
import { ReactComponent as FAQIcon } from "@/assets/icons/settings-faq-icon.svg";
import { useIsMobileTablet } from "@/hooks/useIsMobile";

function Settings() {
  const location = useLocation();
  const currentPage = location.pathname.split("/")[3] || "";
  const isMobileTablet = useIsMobileTablet();

  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  const [perPage, setPerPage] = useState(5);
  const totalNumberOfPages = 10; // for testing purposes

  console.log(currentPageNumber, "current page");
  console.log(perPage, "per page");

  const menuItemsArray = [
    {
      name: "General",
      link: "",
      icon: <GeneralIcon />
    },
    {
      name: "Password",
      link: "password",
      icon: <PasswordIcon />
    },
    {
      name: "Notifications",
      link: "notifications",
      icon: <NotificationIcon />
    },
    {
      name: "Privacy",
      link: "privacy",
      icon: <PrivacyIcon />
    },
    {
      name: "Archive",
      link: "archive",
      icon: <ArchiveIcon />
    },
    {
      name: "Support",
      link: "support",
      icon: <SupportIcon />
    },
    {
      name: "FAQ",
      link: "faq",
      icon: <FAQIcon />
    }
  ];

  const handlePageClick = (data) => {
    setCurrentPageNumber(data);
  };

  const handlePageSizeChange = (data) => {
    setPerPage(data);
  };

  return (
    <div className={cx(styles.settingsContainer, "flexCol")}>
      <section className={cx(styles.heading, "flexRow-space-between")}>
        <h3 className={cx(styles.title)}>Settings</h3>
        {currentPage === "archive" && (
          <div className={cx(styles.paginationWrapper, "flexRow-right-centered")}>
            <Search expanded={!isMobileTablet} inputPlaceholder='Search archive' />
            <Pagination
              totalNumberOfPages={totalNumberOfPages}
              currentPage={currentPage}
              onPageClick={handlePageClick}
              onSizeChange={handlePageSizeChange}
              showSizePicker={true}
            />
          </div>
        )}
      </section>

      <section className={cx(styles.body, "flexRow")}>
        <div className={cx(styles.sidebarWrapper)}>
          <SettingsSideBar data={menuItemsArray} />
        </div>

        <div className={cx(styles.content)}>
          <Outlet />
        </div>
      </section>
    </div>
  );
}

export default Settings;
