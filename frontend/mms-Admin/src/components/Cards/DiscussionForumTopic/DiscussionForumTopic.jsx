import React, { useState } from "react";
import cx from "classnames";
import styles from "./DiscussionForumTopic.module.scss";
import PropTypes from "prop-types";

import commentIcon from "@/assets/icons/comment-icon.svg";
import bookmarkIcon from "@/assets/icons/bookmark-icon.svg";
import bookmarkIconChecked from "@/assets/icons/bookmark-icon-checked.svg";
import shareIcon from "@/assets/icons/share-icon.svg";
import clockIcon from "@/assets/icons/clock-icon.svg";
import moreIcon from "@/assets/icons/more-horizontal-icon.svg";

const DiscussionForumTopic = ({ data }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className={cx(styles.discussionForumCardContainer, "flexCol")}>
      <div className={cx(styles.heading, "flexRow-space-between")}>
        <div className={cx(styles.bioDataDiv, "flexRow-align-center")}>
          <img className={cx(styles.profileImage)} src={data?.profileImage} alt='profile-image' />

          <div className={cx(styles.bioDetails, "flexCol")}>
            <h6 className={cx(styles.name)}>{data?.author}</h6>
            <p className={cx(styles.designation, "flexRow")}>{data?.designation}</p>
          </div>
        </div>
        <img className={cx(styles.icon)} src={moreIcon} alt='more-icon' />
      </div>

      <div className={cx(styles.content, "flexCol")}>
        <h3 className={cx(styles.title)}>{data?.title}</h3>
        <p className={cx(styles.description)}>{data?.description}</p>
      </div>

      <div className={cx(styles.footer, "flexRow-space-between")}>
        <div className={cx(styles.iconsDiv, "flexRow-align-center")}>
          <img className={cx(styles.icon)} src={commentIcon} alt='comment-icon' />
          <img
            onClick={() => handleBookmark()}
            className={cx(styles.icon)}
            src={isBookmarked ? bookmarkIcon : bookmarkIconChecked}
            alt='bookmark-icon'
          />
          <img className={cx(styles.icon)} src={shareIcon} alt='share-icon' />
        </div>

        <div className={cx(styles.timeDiv, "flexRow-align-center")}>
          <img className={cx(styles.icon)} src={clockIcon} alt='clock-icon' />
          <span className={cx(styles.date)}>{data?.date}</span>
        </div>
      </div>
    </div>
  );
};

DiscussionForumTopic.propTypes = {
  data: PropTypes.object.isRequired
};

export default DiscussionForumTopic;
