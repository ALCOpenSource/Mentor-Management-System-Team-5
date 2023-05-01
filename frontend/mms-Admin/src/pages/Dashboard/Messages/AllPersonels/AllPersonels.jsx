import React from "react";
import { useNavigate } from "react-router-dom";
import cx from "classnames";
import styles from "./AllPersonels.module.scss";
import mentorImage from "@/assets/images/reports-program-thumbnail.svg";
import FilterAndSearch from "@/components/FilterAndSearch/FilterAndSearch";
import Pagination from "@/components/Pagination/Pagination";

const AllPersonels = () => {
  const navigate = useNavigate();

  const personelsArray = [
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
    <div className={cx(styles.allPersonelsContainer, "flexCol")}>
      <div className={cx(styles.heading, "flexRow-align-center")}>
        <h3 className={cx(styles.title)}>Select someone to start a conversation</h3>

        <div className={cx(styles.rightSection, "flexRow")}>
          <Pagination showSearchInput={false} />
          <FilterAndSearch showCloseIcon={true} />
        </div>
      </div>

      <div className={cx(styles.body, "flexCol")}>
        {personelsArray.map((data) => (
          <div
            onClick={() => navigate(`/dashboard/messages/chats/${data?.id}`)}
            key={data?.id}
            className={cx(styles.card, "flexRow")}
          >
            <img className={cx(styles.avatar)} src={data?.image} alt='user-image' />
            <div className={cx(styles.userInfo, "flexCol")}>
              <div className={cx(styles.leftGroup, "flexCol")}>
                <h5 className={cx(styles.name)}>{data?.name}</h5>
                <p className={cx(styles.designation)}>{data?.designation}</p>
              </div>

              <div className={cx(styles.positionTags, "flexRow")}>
                {data?.positionTags &&
                  data?.positionTags.map((tag, index) => (
                    <span key={index} className={cx(styles.tag)}>
                      {tag}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPersonels;
