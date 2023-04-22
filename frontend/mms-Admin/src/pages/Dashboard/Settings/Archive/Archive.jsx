import React, { useState } from "react";
import cx from "classnames";
import styles from "./Archive.module.scss";

import { ReactComponent as ArchiveCardIcon } from "@/assets/icons/archive-card-icon.svg";
import { ReactComponent as CalendarIcon } from "@/assets/icons/archive-calendar-icon.svg";
import { ReactComponent as ClockIcon } from "@/assets/icons/archive-clock-icon.svg";
import { ReactComponent as TogglerIcon } from "@/assets/icons/archive-toggler-icon.svg";
import { ReactComponent as ReportIcon } from "@/assets/icons/reports-icon.svg";
import Button from "@/components/Button/Button";

function Archive() {
  const [toggle, setToggle] = useState({
    index: null,
    toggle: false
  });

  const archiveData = [
    {
      title: "Google Africa Scholarship Program",
      icon: ArchiveCardIcon,
      date: "April 15, 2023",
      time: "12:00 PM"
    },
    {
      title: "Google Africa Scholarship Program",
      icon: ArchiveCardIcon,
      date: "April 15, 2023",
      time: "12:00 PM"
    },
    {
      title: "Google Africa Scholarship Program",
      icon: ArchiveCardIcon,
      date: "April 15, 2023",
      time: "12:00 PM"
    },
    {
      title: "Google Africa Scholarship Program",
      icon: ArchiveCardIcon,
      date: "April 15, 2023",
      time: "12:00 PM"
    },
    {
      title: "Google Africa Scholarship Program",
      icon: ArchiveCardIcon,
      date: "April 15, 2023",
      time: "12:00 PM"
    },
    {
      title: "Google Africa Scholarship Program",
      icon: ArchiveCardIcon,
      date: "April 15, 2023",
      time: "12:00 PM"
    },
    {
      title: "Google Africa Scholarship Program",
      icon: ArchiveCardIcon,
      date: "April 15, 2023",
      time: "12:00 PM"
    },
    {
      title: "Google Africa Scholarship Program",
      icon: ArchiveCardIcon,
      date: "April 15, 2023",
      time: "12:00 PM"
    }
  ];

  const handleToggle = (index) => {
    if (toggle.index === index) {
      setToggle({
        index,
        toggle: !toggle.toggle
      });
    } else {
      setToggle({
        index,
        toggle: true
      });
    }
  };

  return (
    <div className={cx(styles.archiveContainer, "flexCol")}>
      {archiveData.map((item, index) => {
        return (
          <div className={cx(styles.cardWrapper, "flexCol")} key={index}>
            <div className={cx(styles.cardHeader, "flexRow-space-between")}>
              <div className={cx(styles.cardIcon)}>
                <item.icon />
              </div>
              <div className={cx(styles.metaData, "flexCol")}>
                <h6 className={cx(styles.metaDataTitle)}>{item.title}</h6>
                <div className={cx(styles.dateTime, "flexRow")}>
                  <div className={cx(styles.infoWrapper, "flexRow")}>
                    <CalendarIcon />
                    <span className={cx(styles.value)}>{item?.date}</span>
                  </div>
                  <div className={cx(styles.infoWrapper, "flexRow")}>
                    <ClockIcon />
                    <span className={cx(styles.value)}>{item?.time}</span>
                  </div>
                </div>
              </div>
              <div className={cx(styles.cardToggler)}>
                <TogglerIcon onClick={() => handleToggle(index)} />
              </div>
            </div>

            {toggle.index === index && toggle.toggle && (
              <div className={cx(styles.cardBody, "flexCol")}>
                <h6 className={cx(styles.title)}>About:</h6>
                <p className={cx(styles.description)}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                  Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae
                  mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum
                  eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque
                </p>

                <div className={cx(styles.summaryDiv, "flexRow-space-between")}>
                  <div className={cx(styles.summary, "flexRow-align-center")}>
                    <ReportIcon />
                    <span className={cx(styles.summaryValue)}>40</span>
                    <span>Program Reports</span>
                  </div>

                  <Button title='View' size='small' />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Archive;
