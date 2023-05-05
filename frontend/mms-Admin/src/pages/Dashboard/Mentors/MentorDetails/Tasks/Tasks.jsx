import React, { useState } from "react";
import cx from "classnames";
import styles from "./Tasks.module.scss";
import { useParams } from "react-router-dom";

import searchIcon from "@/assets/icons/search-icon.svg";
import { ReactComponent as ArchiveCardIcon } from "@/assets/icons/archive-card-icon.svg";
import { ReactComponent as TogglerIcon } from "@/assets/icons/archive-toggler-icon.svg";
import Button from "@/components/Button/Button";

import headerIcon from "@/assets/icons/tasks-overview-card-icon.svg";
import calendarIcon from "@/assets/icons/tasks-overview-calendar-icon.svg";
import reportIcon from "@/assets/icons/task-report-icon-green.png";

const Tasks = () => {
  const params = useParams();
  const taskId = params.id;

  const [toggle, setToggle] = useState({
    index: null,
    toggle: false
  });

  const summaryDivData = [
    {
      icon: reportIcon,
      value: 40,
      caption: "Task / Reports",
      count: 50
    }
  ];

  const cardData = [
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
    <div className={cx(styles.mentorTasksContainer, "flexCol")}>
      <div className={cx(styles.heading, "flexRow-space-between")}>
        <div className={cx(styles.dropdown)}>
          <select name='dropdown' id='dropdown'>
            <option value='All Tasks'>All Tasks</option>
            <option value='All Tasks'>All Tasks</option>
            <option value='All Tasks'>All Tasks</option>
            <option value='All Tasks'>All Tasks</option>
          </select>
        </div>
        <div className={cx(styles.searchDiv, "flexRow-align-center")}>
          <img src={searchIcon} alt='search-icon' />
          <input type='text' placeholder='Search for Tasks' />
        </div>
      </div>
      <div className={cx(styles.body, "flexCol")}>
        <div className={cx(styles.cardContainer, "flexCol")}>
          {cardData.map((item, index) => {
            return (
              <div className={cx(styles.cardWrapper, "flexCol")} key={index}>
                <div className={cx(styles.cardHeader, "flexRow-space-between")}>
                  <div className={cx(styles.wrapper, "flexRow-align-center")}>
                    <img className={cx(styles.icon)} src={headerIcon} alt='task-icon' />
                    <div className={cx(styles.mainContent, "flexCol")}>
                      <h5 className={cx(styles.title)}>{`Room Library Article Written in Java ${taskId}`}</h5>
                      <div className={cx(styles.metaData, "flexRow")}>
                        <img className={cx(styles.dateIcon)} src={calendarIcon} alt='calendar-icon' />
                        <span className={cx(styles.date)}>3 days from now</span>
                      </div>
                    </div>
                  </div>
                  <div className={cx(styles.cardToggler)}>
                    <TogglerIcon onClick={() => handleToggle(index)} />
                  </div>
                </div>

                {toggle.index === index && toggle.toggle && (
                  <>
                    <div className={cx(styles.cardBody, "flexCol")}>
                      <p className={cx(styles.description)}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit
                        urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
                        Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
                        suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit
                        amet. Pellentesque
                      </p>

                      {summaryDivData.map((item, index) => {
                        return (
                          <div className={cx(styles.summaryDiv, "flexRow")} key={index}>
                            <div className={cx(styles.iconDiv, "flexRow")}>
                              <img src={item.icon} alt='icon' />
                            </div>
                            <div className={cx(styles.summary, "flexRow")}>
                              <span className={cx(styles.summaryValue)}>{item.value}</span>
                              <span className={cx(styles.caption)}>{item.caption}</span>
                              {item?.caption.toLowerCase().includes("report") && (
                                <div>
                                  <span className={cx(styles.count)}>{item.count}</span>
                                </div>
                              )}
                            </div>

                            <Button title='View' size='small' />
                          </div>
                        );
                      })}
                    </div>
                    <div className={cx(styles.unAssignBtnDiv)}>
                      <Button title='Unassign from Task' type='secondary' />
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
