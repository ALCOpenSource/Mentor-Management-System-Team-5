import React, { useState } from "react";
import cx from "classnames";
import styles from "./Mentors.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { showModal } from "@/redux/Modal/ModalSlice";
import SuccessNotificationModal from "@/components/Modals/SuccessNotification/SuccessNotification";
import searchIcon from "@/assets/icons/search-icon.svg";
import { ReactComponent as mentorImage } from "@/assets/images/sample-profile-image.svg";
import { ReactComponent as TogglerIconUp } from "@/assets/icons/arrow-circle-up.svg";
import { ReactComponent as TogglerIconDown } from "@/assets/icons/arrow-circle-down.svg";
import Button from "@/components/Button/Button";
import assignSuccessImage from "@/assets/images/activate-user.svg";
import unAssignSuccessImage from "@/assets/images/deactivate-user.svg";
import paperIcon from "@/assets/icons/paper-icon.svg";

function Mentors() {
  const dispatch = useDispatch();

  const [programStatus, setProgramStatus] = useState({
    status: "unassigned",
    index: null
  });

  const displayModal = useSelector((state) => state.modal.show);
  const modalName = useSelector((state) => state.modal.modalName);

  const handleSetProgramStatus = (status, index) => {
    setProgramStatus({ status, index });

    status === "unassigned" &&
      dispatch(
        showModal({
          name: "successNotification",
          modalData: {
            title: "Unassigned from Mentor Manager",
            image: unAssignSuccessImage
          }
        })
      );

    status === "assigned" &&
      dispatch(
        showModal({
          name: "successNotification",
          modalData: {
            title: "Assign To Mentor Manager",
            image: assignSuccessImage
          }
        })
      );
  };

  const [toggle, setToggle] = useState({
    index: null,
    toggle: false
  });

  const mentorsArray = [
    {
      name: "Alison Davis",
      designation: "Program Assistant, Andela, She/Her",
      image: mentorImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      name: "Alison Davis",
      designation: "Program Assistant, Andela, She/Her",
      image: mentorImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      name: "Alison Davis",
      designation: "Program Assistant, Andela, She/Her",
      image: mentorImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      name: "Alison Davis",
      designation: "Program Assistant, Andela, She/Her",
      image: mentorImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      name: "Alison Davis",
      designation: "Program Assistant, Andela, She/Her",
      image: mentorImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      name: "Alison Davis",
      designation: "Program Assistant, Andela, She/Her",
      image: mentorImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      name: "Alison Davis",
      designation: "Program Assistant, Andela, She/Her",
      image: mentorImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      name: "Alison Davis",
      designation: "Program Assistant, Andela, She/Her",
      image: mentorImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      name: "Alison Davis",
      designation: "Program Assistant, Andela, She/Her",
      image: mentorImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      name: "Alison Davis",
      designation: "Program Assistant, Andela, She/Her",
      image: mentorImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    }
    // {
    //   title: "Alison Davis",
    //   icon: mentorImage,
    //   date: "April 15, 2023",
    //   time: "12:00 PM"
    // }
  ];

  const handleToggle = (index) => {
    if (toggle.index === index) {
      setToggle({
        index,
        toggle: !toggle.toggle
      });
    } else {
      setToggle({
        index,
        toggle: true
      });
    }
  };

  return (
    <div className={cx(styles.mentorManagerMentorsContainer, "flexCol")}>
      <div className={cx(styles.heading, "flexRow-space-between")}>
        <div className={cx(styles.dropdown)}>
          <select name='dropdown' id='dropdown'>
            <option value='All Programs'>All Mentors</option>
            <option value='All Programs'>Assigned Mentors</option>
            <option value='All Programs'>Unassigned Mentors</option>
          </select>
        </div>
        <div className={cx(styles.searchDiv, "flexRow-align-center")}>
          <img src={searchIcon} alt='search-icon' />
          <input type='text' placeholder='Search for Mentors' />
        </div>
      </div>
      <div className={cx(styles.body, "flexCol")}>
        <div className={cx(styles.cardContainer, "flexCol")}>
          {mentorsArray.map((item, index) => {
            return (
              <div className={cx(styles.cardWrapper, "flexCol")} key={index}>
                <div className={cx(styles.cardHeader, "flexRow-space-between")}>
                  <div className={cx(styles.cardIcon)}>
                    <item.image />
                  </div>
                  <div className={cx(styles.mainGroup, "flexCol")}>
                    <div className={cx(styles.metaData, "flexCol")}>
                      <h6 className={cx(styles.metaDataTitle)}>{item.name}</h6>
                      <div className={cx(styles.dateTime, "flexRow")}>
                        <div className={cx(styles.infoWrapper, "flexRow")}>
                          <span className={cx(styles.value)}>{item?.designation}</span>
                        </div>
                      </div>
                    </div>
                    <div className={cx(styles.tagsDiv, "flexRow")}>
                      {item.positionTags.map((tag, index) => {
                        return (
                          <h6 className={cx(styles.tag, "flexRow-fully-centered")} key={index}>
                            {tag}
                          </h6>
                        );
                      })}
                    </div>
                  </div>

                  <div className={cx(styles.cardToggler)}>
                    {toggle?.toggle && toggle.index === index ? (
                      <TogglerIconUp onClick={() => handleToggle(index)} />
                    ) : (
                      <TogglerIconDown onClick={() => handleToggle(index)} />
                    )}
                  </div>
                </div>

                {toggle.index === index && toggle.toggle && (
                  <>
                    <div className={cx(styles.cardBody, "flexCol")}>
                      <h6 className={cx(styles.title)}>Bio</h6>
                      <p className={cx(styles.description)}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit
                        urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
                        Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
                        suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit
                        amet. Pellentesque
                      </p>

                      <div className={cx(styles.infoDiv, "flexCol")}>
                        <div className={cx(styles.info, "flexCol")}>
                          <h6 className={cx(styles.infoTitle)}>Technical Proficiency:</h6>
                          <h6 className={cx(styles.infoAnswer)}>Java Script, Django, Mysql, Android</h6>
                        </div>
                        <div className={cx(styles.info, "flexCol")}>
                          <h6 className={cx(styles.infoTitle)}>Previous Programs:</h6>
                          <h6 className={cx(styles.infoAnswer)}>GADS 2022, Google I/O Extended 2021</h6>
                        </div>
                        <div className={cx(styles.info, "flexCol")}>
                          <h6 className={cx(styles.infoTitle)}>Previous Roles Held:</h6>
                          <h6 className={cx(styles.infoAnswer)}>
                            Learner, Mentor, Program Assistant, Program Assistant Lead
                          </h6>
                        </div>
                        <div className={cx(styles.info, "flexCol")}>
                          <h6 className={cx(styles.infoTitle)}>Availability to join a new program:</h6>
                          <h6 className={cx(styles.infoAnswer)}>Unavailable</h6>
                        </div>
                        <div className={cx(styles.info, "flexCol")}>
                          <h6 className={cx(styles.infoTitle)}>Program of interest:</h6>
                          <h6 className={cx(styles.infoAnswer)}>Google Africa Scholarship Program</h6>
                        </div>
                        <div className={cx(styles.info, "flexCol")}>
                          <h6 className={cx(styles.infoTitle)}>Been a Mentor Before?</h6>
                          <h6 className={cx(styles.infoAnswer)}>Yes</h6>
                        </div>
                        <div className={cx(styles.info, "flexCol")}>
                          <h6 className={cx(styles.infoTitle)}>Years of Technical Experience:</h6>
                          <h6 className={cx(styles.infoAnswer)}>3years</h6>
                        </div>
                        <div className={cx(styles.documentDiv, "flexCol")}>
                          <h6 className={cx(styles.documentTitle)}>Documents</h6>
                          <div className={cx(styles.documentDivInner, "flexRow")}>
                            <span>
                              <img src={paperIcon} alt='paper-icon' />
                              My resume.doc
                            </span>
                            <span>
                              <img src={paperIcon} alt='paper-icon' />
                              Birth Cerificate.doc
                            </span>
                            <span>
                              <img src={paperIcon} alt='paper-icon' />
                              Java Lead.doc
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={cx(styles.unAssignBtnDiv)}>
                      {programStatus.status === "assigned" && programStatus.index === index ? (
                        <Button
                          onClick={() => handleSetProgramStatus("unassigned", index)}
                          title='Unassigned from Mentor Manager'
                          type='secondary'
                        />
                      ) : (
                        <Button
                          onClick={() => handleSetProgramStatus("assigned", index)}
                          title='Assign To Mentor Manager'
                        />
                      )}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {displayModal && modalName === "successNotification" ? <SuccessNotificationModal show size='md' /> : null}
    </div>
  );
}

export default Mentors;
