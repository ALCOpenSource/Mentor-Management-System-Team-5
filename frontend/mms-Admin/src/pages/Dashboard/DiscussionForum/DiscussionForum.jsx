import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cx from "classnames";
import styles from "./DiscussionForum.module.scss";
import addIcon from "@/assets/icons/add-icon.svg";
import thumbnailImg from "@/assets/images/mentor-manager-thumbnail.svg";
import TopicCard from "@/components/Cards/DiscussionForumTopic/DiscussionForumTopic";
import SuccessNotificationModal from "@/components/Modals/SuccessNotification/SuccessNotification";
import DeleteNotificationModal from "@/components/Modals/DeleteNotification/DeleteNotification";
import CreateForumTopicModal from "@/components/Modals/CreateAndEditForumTopic/CreateAndEditForumTopic";
import { showModal } from "@/redux/Modal/ModalSlice";

const DiscussionForum = () => {
  const dispatch = useDispatch();
  const displayModal = useSelector((state) => state.modal.show);
  const modalName = useSelector((state) => state.modal.modalName);

  const topicsArray = [
    {
      id: 1,
      title: "The New MMS Discussion Forum Guidelines and Regulations ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enilf.",
      date: "5hrs ago",
      author: "Alison Davis",
      designation: "Mentor Manager",
      profileImage: thumbnailImg
    },
    {
      id: 2,
      title: "The New MMS Discussion Forum Guidelines and Regulations ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enilf.",
      date: "5hrs ago",
      author: "Alison Davis",
      designation: "Mentor Manager",
      profileImage: thumbnailImg
    },
    {
      id: 3,
      title: "The New MMS Discussion Forum Guidelines and Regulations ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enilf.",
      date: "5hrs ago",
      author: "Alison Davis",
      designation: "Mentor Manager",
      profileImage: thumbnailImg
    },
    {
      id: 4,
      title: "The New MMS Discussion Forum Guidelines and Regulations ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enilf.",
      date: "5hrs ago",
      author: "Alison Davis",
      designation: "Mentor Manager",
      profileImage: thumbnailImg
    }
  ];

  return (
    <div className={cx(styles.discussionForumContainer, "flexCol")}>
      <div className={cx(styles.heading, "flexCol")}>
        <h3 className={cx(styles.title)}>Discussion Forum</h3>
        <div
          onClick={() =>
            dispatch(
              showModal({
                name: "createAndEditForumTopic",
                modalData: {
                  title: "New Topic",
                  type: "create"
                }
              })
            )}
          className={cx(styles.addNewTopicDiv, "flexRow-space-between")}
        >
          <span>Add new topic</span>
          <img src={addIcon} alt='add-icon' />
        </div>
      </div>
      <div className={cx(styles.body, "flexCol")}>
        {topicsArray.map((topic) => (
          <TopicCard key={topic?.id} data={topic} />
        ))}
      </div>

      {displayModal && modalName === "createAndEditForumTopic" ? <CreateForumTopicModal show size='lg' /> : null}
      {displayModal && modalName === "successNotification" ? <SuccessNotificationModal show size='md' /> : null}
      {displayModal && modalName === "deleteNotification" ? <DeleteNotificationModal show size='md' /> : null}
    </div>
  );
};

export default DiscussionForum;
