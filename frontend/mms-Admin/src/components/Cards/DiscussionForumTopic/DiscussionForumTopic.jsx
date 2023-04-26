import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cx from "classnames";
import styles from "./DiscussionForumTopic.module.scss";
import PropTypes from "prop-types";
import { showModal } from "@/redux/Modal/ModalSlice";
import commentIcon from "@/assets/icons/comment-icon.svg";
import bookmarkIcon from "@/assets/icons/bookmark-icon.svg";
import bookmarkIconChecked from "@/assets/icons/bookmark-icon-checked.svg";
import shareIcon from "@/assets/icons/share-icon.svg";
import clockIcon from "@/assets/icons/clock-icon.svg";
import moreIcon from "@/assets/icons/more-horizontal-icon.svg";
import caretUp from "@/assets/icons/caret-up-icon.svg";

const DiscussionForumTopic = ({ data }) => {
  const dispatch = useDispatch();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleDropdownListClick = (type, data) => {
    console.log(data, "data");
    console.log(type, "type");
    setIsDropdownOpen(false);
    if (type === "edit") {
      dispatch(
        showModal({
          name: "createAndEditForumTopic",
          modalData: {
            title: "Edit Post",
            data: data
          }
        })
      );
    }

    if (type === "delete") {
      dispatch(
        showModal({
          name: "deleteConfirmation",
          modalData: {
            title: "Delete Forum Topic",
            description: "Are you sure you want to delete this forum topic?"
          }
        })
      );
    }

  };

  const dropdownListArray = [
    {
      name: "Edit Post",
      key: "edit"
    },
    {
      name: "Delete Post",
      key: "delete"
    }
  ];

  const handleDropdownToggle = (id) => {
    setIsDropdownOpen(!isDropdownOpen);
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
        <div className={cx(styles.moreOptionsDiv)}>
        <img className={cx(styles.icon)} src={moreIcon} alt='more-icon'
        onClick={() => handleDropdownToggle(data?.id)}
        />
        {
          isDropdownOpen && (
            <div className={cx(styles.dropdown)}>
              <ul className={cx(styles.dropdownList)}>
                {
                  dropdownListArray.map((item) => {
                    return (
                      <li
                        onClick={() => handleDropdownListClick(item?.key, data)}
                        key={item.key}
                        className={cx(styles.dropdownListItem)}
                      >
                        {item.name}
                      </li>
                    );
                  })
                }
              </ul>
              <img onClick={() => handleDropdownToggle(data?.id)} src={caretUp} alt="caret-up" />
            </div>
          )
        }

        </div>
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
            src={isBookmarked ? bookmarkIconChecked : bookmarkIcon}
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
