import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import cx from "classnames";
import styles from "./Mentors.module.scss";
import Button from "@/components/Button/Button";
import Pagination from "@/components/Pagination/Pagination";
import FilterAndSearch from "@/components/FilterAndSearch/FilterAndSearch";
import mentorImage from "@/assets/images/sample-profile-image.svg";
import MiniProfile from "@/components/Cards/MiniProfile/MiniProfile";
import { ReactComponent as GridViewIcon } from "@/assets/icons/grid-view-icon.svg";
import { ReactComponent as ListViewIcon } from "@/assets/icons/list-view-icon.svg";
import { useNavigate } from "react-router-dom";
import { showModal } from "@/redux/Modal/ModalSlice";
import SuccessNotificationModal from "@/components/Modals/SuccessNotification/SuccessNotification";
import DeleteNotificationModal from "@/components/Modals/DeleteNotification/DeleteNotification";
import AddUserModal from "@/components/Modals/AddUser/AddUser";

function Mentors() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [view, setView] = useState("grid");

  const displayModal = useSelector((state) => state.modal.show);
  const modalName = useSelector((state) => state.modal.modalName);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [mentorsPerPage] = useState(6);
  // const [mentors, setMentors] = useState(mentorsArray);
  // const [searchTerm, setSearchTerm] = useState("");

  const handleAddMentor = () => {
    dispatch(
      showModal({
        name: "addUser",
        modalData: {
          title: "Add Mentor"
        }
      })
    );
  };

  const mentorsArray = [
    {
      id: 1,
      name: "Kabiru Omo Isaka",
      designation: "Program Assistant, Andela, He/Him",
      image: mentorImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      id: 2,
      name: "Kabiru Omo Isaka",
      designation: "Program Assistant, Andela, He/Him",
      image: mentorImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      id: 3,
      name: "Kabiru Omo Isaka",
      designation: "Program Assistant, Andela, He/Him",
      image: mentorImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      id: 4,
      name: "Kabiru Omo Isaka",
      designation: "Program Assistant, Andela, He/Him",
      image: mentorImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      id: 5,
      name: "Kabiru Omo Isaka",
      designation: "Program Assistant, Andela, He/Him",
      image: mentorImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      id: 6,
      name: "Kabiru Omo Isaka",
      designation: "Program Assistant, Andela, He/Him",
      image: mentorImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      id: 7,
      name: "Kabiru Omo Isaka",
      designation: "Program Assistant, Andela, He/Him",
      image: mentorImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      id: 8,
      name: "Kabiru Omo Isaka",
      designation: "Program Assistant, Andela, He/Him",
      image: mentorImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      id: 9,
      name: "Kabiru Omo Isaka",
      designation: "Program Assistant, Andela, He/Him",
      image: mentorImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      id: 10,
      name: "Kabiru Omo Isaka",
      designation: "Program Assistant, Andela, He/Him",
      image: mentorImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    }
  ];

  return (
    <div className={cx(styles.mentorsContainer, "flexCol")}>
      <div className={cx(styles.heading, "flexRow")}>
        <div className={cx(styles.leftSection, "flexRow")}>
          <h3 className={cx(styles.title)}>Mentors</h3>
          <div className={cx(styles.viewToggler, "flexRow")}>
            <GridViewIcon
              onClick={() => setView("grid")}
              className={cx(styles.icon, view === "grid" ? styles.isActive : null)}
            />
            <ListViewIcon
              onClick={() => setView("list")}
              className={cx(styles.icon, view === "list" ? styles.isActive : null)}
            />
          </div>
        </div>
        <div className={cx(styles.btnGroup, "flexRow")}>
          <Button
            onClick={() => navigate("/dashboard/messages/broadcast-message")}
            title='Send Broadcast Message'
            type='secondary'
            size='small'
          />
          <Button onClick={() => handleAddMentor()} title='Add New Mentor' size='small' />
        </div>
        <div className={cx(styles.paginationAndSearchDiv, "flexRow")}>
          <Pagination showSearchInput={false} />
          <FilterAndSearch />
        </div>
      </div>

      <div className={cx(styles.body, view === "grid" ? styles.gridView : styles.listView)}>
        {mentorsArray.map((mentor, index) => (
          <MiniProfile onClick={() => navigate(`mentor-details/${mentor?.id}`)} key={index} data={mentor} type={view} />
        ))}
      </div>

      {displayModal && modalName === "deleteNotification" ? <DeleteNotificationModal show size='md' /> : null}
      {displayModal && modalName === "successNotification" ? <SuccessNotificationModal show size='md' /> : null}
      {displayModal && modalName === "addUser" ? <AddUserModal show size='md' /> : null}
    </div>
  );
}

export default Mentors;
