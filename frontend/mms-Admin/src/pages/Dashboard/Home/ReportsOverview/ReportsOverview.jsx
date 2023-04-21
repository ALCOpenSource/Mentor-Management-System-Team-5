import React from "react";
import cx from "classnames";
import styles from "./ReportsOverview.module.scss";
import Button from "@/components/Button/Button";

import cardIcon from "@/assets/icons/reports-overview-card-icon.svg";

import DashboardReportsOverviewCard from "@/components/Cards/DashboardReportsOverview/DashboardReportsOverview";

const ReportsOverview = () => {
  const cardDataArray = [
    {
      title: "Google Africa Scholarship",
      author: "Ibrahim Kabir",
      date: "19th - 25th Oct 23",
      icon: cardIcon
    },
    {
      title: "Google Africa Scholarship",
      author: "Ibrahim Kabir",
      date: "19th - 25th Oct 23",
      icon: cardIcon
    },
    {
      title: "Google Africa Scholarship",
      author: "Ibrahim Kabir",
      date: "19th - 25th Oct 23",
      icon: cardIcon
    }
  ];

  return (
    <div className={cx(styles.reportsOverviewContainer, "flexCol")}>
      <div className={cx(styles.heading, "flexRow-space-between")}>
        <h6 className={cx(styles.leftSection)}>Reports Overview</h6>

        <div className={cx(styles.rightSection)}>
          <p>10 reports submitted</p>
        </div>
      </div>

      <div className={cx(styles.cardsGroup)}>
        {cardDataArray.map((item, index) => (
          <DashboardReportsOverviewCard key={index} data={item} />
        ))}
      </div>

      <div className={cx(styles.btnDiv, "flexRow")}>
        <Button title="View All" type="primary" size="small" />
      </div>
    </div>
  );
};

export default ReportsOverview;
