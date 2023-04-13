import React from "react";
import cx from "classnames";
import styles from "./Home.module.scss";

import Summary from "./Summary/Summary";
import ProgramsOverview from "./ProgramsOverview/ProgramsOverview";
import ReportsOverview from "./ReportsOverview/ReportsOverview";
import TasksOverview from "./TasksOverview/TasksOverview";

const Home = () => {
  return (
    <div className={cx(styles.homeContainer, "flexCol")}>
      <div className={cx(styles.heading, "flexRow-space-between")}>
        <h3 className={cx(styles.title)}>Dashboard</h3>

        <div className={cx(styles.dateRangeSelector)}>
          <select name='date' id='duration'>
            <option value='today'>Today</option>
            <option value='yesterday'>Yesterday</option>
            <option value='thisWeek'>This Week</option>
            <option value='lastWeek'>Last Week</option>
            <option value='thisMonth'>This Month</option>
          </select>
        </div>
      </div>
      <Summary />
      <ProgramsOverview />
      <ReportsOverview />
      <TasksOverview />
    </div>
  );
};

export default Home;
