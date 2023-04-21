import React from "react";
import cx from "classnames";
import styles from "./Summary.module.scss";
// import PropTypes from "prop-types";
import SummaryCard from "@/components/Cards/DashboardSummary/DashboardSummary";
import Button from "@/components/Button/Button";

import tasksIcon from "@/assets/icons/summary-card-tasks-icon.svg";
import reportsIcon from "@/assets/icons/summary-card-reports-icon.svg";
import mentorsIcon from "@/assets/icons/summary-card-mentors-icon.svg";
import mentorManagersIcon from "@/assets/icons/summary-card-mentor-managers-icon.svg";

const Summary = () => {
  const summaryCardsData = [
    {
      title: "Mentors",
      value: "60",
      percentChange: "+10%",
      icon: mentorsIcon
    },
    {
      title: "Mentor Managers",
      value: "65",
      percentChange: "+10%",
      icon: mentorManagersIcon
    },
    {
      title: "Tasks",
      value: "50",
      percentChange: "+10%",
      icon: tasksIcon
    },
    {
      title: "Reports",
      value: "55",
      percentChange: "+10%",
      icon: reportsIcon
    }
  ];

  return (
    <div className={cx(styles.summaryContainer, "flexRow")}>
      <div className={cx(styles.activeProgramsDiv, "flexCol")}>
        <Button title='View All' type='secondary' size='small' />
        <div className={cx(styles.body, "flexRow")}>
          <span className={cx(styles.value)}>60</span>
          <h6 className={cx(styles.heading)}>Active Programs</h6>
        </div>
      </div>
      <div className={cx(styles.cardsGroup, "flexRow")}>
        {summaryCardsData.map((item, index) => (
          <SummaryCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

// Summary.propTypes = {
//   data: PropTypes.object.isRequired
// };

export default Summary;
