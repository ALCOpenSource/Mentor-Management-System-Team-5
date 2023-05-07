import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import cx from "classnames";
import styles from "./AllPersonels.module.scss";
import mentorImage from "@/assets/images/reports-program-thumbnail.svg";
import Pagination from "@/components/Pagination/Pagination";
import Search from "@/components/Search/Search";
import Filter from "@/components/Filter/Filter";
import backIcon from "@/assets/icons/back-icon.svg";

const AllPersonels = () => {
  const navigate = useNavigate();

  const [collapseInput, setCollapseInput] = useState(false);
  const [closeSelectElement, setCloseSelectElement] = useState(false);

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

  const handleCloseSearchInput = (e) => {
    console.log(e, "handle close input");
    setCollapseInput(true);
  };

  const handleCloseSelectElement = (e) => {
    console.log(e, "handle close select");
    setCloseSelectElement(true);
  };

  const handleSearchInput = (data) => {
    console.log(data);
  };

  const handleSelectedFilterItem = (item) => {
    console.log(item);
  };

  return (
    <div className={cx(styles.allPersonelsContainer, "flexCol")}>
      <div className={cx(styles.heading, "flexRow-align-center")}>
        <h3 className={cx(styles.title)}>
          <img onClick={() => navigate(-1)} src={backIcon} alt='back-icon' />
          Select someone to start a conversation
        </h3>

        <div className={cx(styles.rightSection, "flexRow")}>
          <Pagination totalNumberOfPages={10} />
          <Search
            inputPlaceholder='Search for tasks...'
            onChange={handleSearchInput}
            collapseInput={collapseInput}
            setCollapseInput={setCollapseInput}
            closeSelectElement={handleCloseSelectElement}
          />
          <Filter
            dropdownItems={[
              { name: "All", id: 1 },
              { name: "Mentors", id: 2 },
              { name: "Mentor Managers", id: 3 }
            ]}
            selectedFilterItem={handleSelectedFilterItem}
            closeSearchInput={handleCloseSearchInput}
            closeSelectElement={closeSelectElement}
            setCloseSelectElement={setCloseSelectElement}
          />
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
