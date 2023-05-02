import React from "react";
import cx from "classnames";
import styles from "./Summary.module.scss";
// import PropTypes from "prop-types";
import SummaryCard from "@/components/Cards/DashboardSummary/DashboardSummary";
import { useNavigate } from "react-router-dom";
import Button from "@/components/Button/Button";
import { ReactComponent as TasksIcon } from "@/assets/icons/summary-card-tasks-icon.svg";
import { ReactComponent as ReportsIcon } from "@/assets/icons/summary-card-reports-icon.svg";
import { ReactComponent as MentorsIcon } from "@/assets/icons/summary-card-mentors-icon.svg";
import { ReactComponent as MentorManagersIcon } from "@/assets/icons/summary-card-mentor-managers-icon.svg";

function Summary() {
  const navigate = useNavigate();

  const summaryCardsData = [
    {
      title: "Mentors",
      value: "60",
      percentChange: "+10%",
      icon: MentorsIcon,
      path: "mentors"
    },
    {
      title: "Mentor Managers",
      value: "65",
      percentChange: "+10%",
      icon: MentorManagersIcon,
      path: "mentor-managers"
    },
    {
      title: "Tasks",
      value: "50",
      percentChange: "+10%",
      icon: TasksIcon,
      path: "tasks"
    },
    {
      title: "Reports",
      value: "55",
      percentChange: "+10%",
      icon: ReportsIcon,
      path: "reports"
    }
  ];

  return (
    <div className={cx(styles.summaryContainer, "flexRow")}>
      <div className={cx(styles.activeProgramsDiv, "flexCol")}>
        <Button onClick={() => navigate("programs")} title='View All' type='secondary' size='small' />
        <div className={cx(styles.body, "flexRow")}>
          <span className={cx(styles.value)}>60</span>
          <h6 className={cx(styles.heading)}>Active Programs</h6>
        </div>
      </div>
      <div className={cx(styles.cardsGroup, "flexRow")}>
        {summaryCardsData.map((item, index) => (
          <SummaryCard onClick={() => navigate(`${item?.path}`)} key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

// Summary.propTypes = {
//   data: PropTypes.object.isRequired
// };

export default Summary;
