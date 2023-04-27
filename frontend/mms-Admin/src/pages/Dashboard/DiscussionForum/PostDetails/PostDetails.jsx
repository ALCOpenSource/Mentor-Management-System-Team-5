import React, { useState } from "react";
import cx from "classnames";
import { useSelector } from "react-redux";
import styles from "./PostDetails.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "@/components/Button/Button";
import TopicCard from "@/components/Cards/DiscussionForumTopic/DiscussionForumTopic";
import TextArea from "@/components/TextArea/TextArea";
import attachmentIcon from "@/assets/icons/attachment-icon-green.svg";
import smileyIcon from "@/assets/icons/smiley-icon.svg";
import moreIcon from "@/assets/icons/more-horizontal-icon.svg";
import caretUp from "@/assets/icons/caret-up-icon.svg";
import DeleteNotificationModal from "@/components/Modals/DeleteNotification/DeleteNotification";
import CreateForumTopicModal from "@/components/Modals/CreateAndEditForumTopic/CreateAndEditForumTopic";

const PostDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const displayModal = useSelector((state) => state.modal.show);
  const modalName = useSelector((state) => state.modal.modalName);
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    status: false,
    id: ""
  });

  const topicCardData = location?.state?.data;

  const dropdownListArray = [
    {
      name: "Hide comment",
      key: "hide"
    },
    {
      name: "Delete comment",
      key: "delete"
    }
  ];

  const handleDropdownToggle = (id) => {
    setIsDropdownOpen({
      ...isDropdownOpen,
      status: !isDropdownOpen.status,
      id: id
    });
  };

  const handleDropdownListClick = (type, data) => {
    console.log(data, "data");
    console.log(type, "type");
    setIsDropdownOpen(false);
    // if (type === "edit") {
    //   dispatch(
    //     showModal({
    //       name: "createAndEditForumTopic",
    //       modalData: {
    //         title: "Edit Post",
    //         data: data,
    //         type: "edit"
    //       }
    //     })
    //   );
    // }

    // if (type === "delete") {
    //   dispatch(
    //     showModal({
    //       name: "deleteNotification",
    //       modalData: {
    //         title: "Post Deleted Successfully",
    //         type: "post"
    //       }
    //     })
    //   );
    // }
  };

  const commentsArray = [
    {
      id: 1,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enilf.",
      name: "Ibrahim Kekule",
      date: "Just now"
    },
    {
      id: 2,
      comment: "Found this so insightful. please how can i register to be a part of the program?",
      name: "Sarah Tasha",
      date: "12 mins ago"
    },
    {
      id: 3,
      comment: "Found this so insightful. please how can i register to be a part of the program?",
      name: "Sarah John",
      date: "12 mins ago"
    }
  ];

  return (
    <div className={cx(styles.postDetailsContainer, "flexCol")}>
      <div className={cx(styles.heading, "flexRow-space-between")}>
        <h3 className={cx(styles.title)}>Comments</h3>
        <Button title='Close' onClick={() => navigate(-1)} />
      </div>

      <div className={cx(styles.postDetailsBody, "flexCol")}>
        <TopicCard data={topicCardData} disableNavLink={true} />

        <div className={cx(styles.textAreaWrapper, "flexCol")}>
          <TextArea
            placeholder='Write a comment...'
            label=''
            borderColor='none'
            marginbottom='0'
            minHeight='150px'
            bgColor='transparent'
          />

          <div className={cx(styles.attachmentsDiv, "flexRow-space-between")}>
            <div className={cx(styles.attachments, "flexRow")}>
              <img src={attachmentIcon} alt='attachment-icon' />
              <img src={smileyIcon} alt='smiley-icon' />
            </div>
            <Button title='Post Comment' type='primary' />
          </div>
        </div>

        <div className={cx(styles.commentsList, "flexCol")}>
          {commentsArray.map((item) => {
            return (
              <div key={item?.id} className={cx(styles.comment, "flexCol")}>
                <div className={cx(styles.top, "flexRow-space-between")}>
                  <h6 className={cx(styles.name)}>{item?.name}</h6>
                  <div className={cx(styles.moreOptionsDiv)}>
                    <img
                      className={cx(styles.icon)}
                      src={moreIcon}
                      alt='more-icon'
                      onClick={() => handleDropdownToggle(item?.id)}
                    />
                    {isDropdownOpen.status && isDropdownOpen.id === item?.id && (
                      <div className={cx(styles.dropdown)}>
                        <ul className={cx(styles.dropdownList)}>
                          {dropdownListArray.map((listItem) => {
                            return (
                              <li
                                onClick={() => handleDropdownListClick(listItem?.key, item)}
                                key={listItem.key}
                                className={cx(styles.dropdownListItem)}
                              >
                                {listItem.name}
                              </li>
                            );
                          })}
                        </ul>
                        <img onClick={() => handleDropdownToggle(item?.id)} src={caretUp} alt='caret-up' />
                      </div>
                    )}
                  </div>
                </div>
                <p>{item?.comment}</p>
                <span>{item?.date}</span>
              </div>
            );
          })}
        </div>
      </div>

      {displayModal && modalName === "createAndEditForumTopic" ? <CreateForumTopicModal show size='lg' /> : null}
      {displayModal && modalName === "deleteNotification" ? <DeleteNotificationModal show size='md' /> : null}
    </div>
  );
};

export default PostDetails;
