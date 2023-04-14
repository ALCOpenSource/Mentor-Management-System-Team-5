import React from "react";
import cx from "classnames";
import styles from "./Settings.module.scss";
import { useLocation } from "react-router-dom";
import SettingsSideBar from "@/components/SettingsSideBar/SettingsSideBar";
import { Outlet } from "react-router-dom";

import { ReactComponent as GeneralIcon } from "@/assets/icons/settings-general-icon.svg";
import { ReactComponent as PasswordIcon } from "@/assets/icons/settings-password-icon.svg";
import { ReactComponent as NotificationIcon } from "@/assets/icons/settings-notification-icon.svg";
import { ReactComponent as PrivacyIcon } from "@/assets/icons/settings-privacy-icon.svg";
import { ReactComponent as ArchiveIcon } from "@/assets/icons/settings-archive-icon.svg";
import { ReactComponent as SupportIcon } from "@/assets/icons/settings-support-icon.svg";
import { ReactComponent as FAQIcon } from "@/assets/icons/settings-faq-icon.svg";

const Settings = () => {
  const location = useLocation();
  const currentPage = location.pathname.split("/")[2] || "";

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

  return (
    <div className={cx(styles.settingsContainer, "flexCol")}>
      <section className={cx(styles.heading, "flexRow-align-center")}>
        <h3 className={cx(styles.title)}>Settings</h3>
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
};

export default Settings;
