import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showModal } from "@/redux/Modal/ModalSlice";
import SuccessNotificationModal from "@/components/Modals/SuccessNotification/SuccessNotification";
import cx from "classnames";
import styles from "./About.module.scss";
import arrayToString from "@/helpers/arrayToString";

import instagramIcon from "@/assets/icons/instagram-icon.svg";
import linkedinIcon from "@/assets/icons/linkedin-icon.svg";
import githubIcon from "@/assets/icons/github-icon.svg";
import twitterIcon from "@/assets/icons/twitter-icon.svg";
import paperIcon from "@/assets/icons/paper-icon.svg";
import Button from "@/components/Button/Button";
import activateUserImage from "@/assets/images/activate-user.svg";
import deActivateUserImage from "@/assets/images/deactivate-user.svg";

const About = () => {
  const dispatch = useDispatch();

  const [userStatus, setUserStatus] = useState("active");

  const displayModal = useSelector((state) => state.modal.show);
  const modalName = useSelector((state) => state.modal.modalName);

  const handleSetUserStatus = (status) => {
    setUserStatus(status);

    status === "deactivate" &&
      dispatch(
        showModal({
          name: "successNotification",
          modalData: {
            title: "Mentor Deactivated Successfully",
            image: deActivateUserImage
          }
        })
      );

    status === "activate" &&
      dispatch(
        showModal({
          name: "successNotification",
          modalData: {
            title: "Mentor Activated Successfully",
            image: activateUserImage
          }
        })
      );
  };

  const userData = {
    bio: {
      title: "Bio",
      response:
        "I am a software engineer with 5 years of experience in the industry. I have worked with a variety of technologies and have a passion for learning new things. I am currently working on a project that will help people find mentors in their area."
    },

    misc: {
      technicalProficiency: {
        title: "Technical Proficiency",

        response: ["Javascript", "Django", "Android"]
      },

      previousPrograms: {
        title: "Previous Programs",

        response: ["GADS 2022", "Google I/O Extended 2021"]
      },

      previousRolesHeld: {
        title: "Previous Roles Held",

        response: [
          "Learner",
          "Mentor",
          "Program Assistant",
          "Program Assistant Lead",
          "Learner",
          "Mentor",
          "Program Assistant",
          "Program Assistant Lead"
        ]
      },

      availability: {
        title: "Availability To Join Another Program",

        response: "Unavailable"
      },

      programOfInterest: {
        title: "Program Of Interest",

        response: "Google Africa Scholarship Program"
      },

      beenAMentorBefore: {
        title: "Been A Mentor Before",

        response: "Yes"
      },

      yearsOfTechnicalExperience: {
        title: "Years Of Technical Experience",

        response: "5years"
      }
    },

    documents: {
      title: "Documents",
      files: ["resume.doc", "cover_letter.pdf", "birth certificate.doc"]
    },

    website: {
      title: "Website",
      response: "https://www.kabir.i@andela.com"
    },

    socialInfoData: [
      {
        id: 1,
        title: "Instagram",
        icon: instagramIcon,
        username: "@kabir.ahmad"
      },

      {
        id: 2,
        title: "Twitter",
        icon: twitterIcon,
        username: "@kabir.ahmad"
      },

      {
        id: 3,
        title: "Github",
        icon: githubIcon,
        username: "@kabir.ahmad"
      },

      {
        id: 4,
        title: "LinkedIn",
        icon: linkedinIcon,
        username: "@kabir.ahmad"
      }
    ]
  };

  return (
    <div className={cx(styles.aboutContainer, "flexCol")}>
      <div className={cx(styles.subSectionWrapper, "flexCol")}>
        <h3 className={cx(styles.title)}>{userData?.bio?.title}</h3>
        <p className={cx(styles.bio)}>{userData?.bio?.response}</p>
      </div>

      <div className={cx(styles.miscInfoDiv, styles.subSectionWrapper, "flexCol")}>
        {Object.keys(userData?.misc).map((key) => (
          <div key={key} className={cx(styles.miscInfo, "flexRow-align-center")}>
            <h6 className={cx(styles.title)}>{userData?.misc[key].title}:</h6>
            <p className={cx(styles.info)}>
              {(Array.isArray(userData?.misc[key]?.response) && arrayToString(userData?.misc[key]?.response)) ||
                userData?.misc[key]?.response}
            </p>
          </div>
        ))}
      </div>

      <div className={cx(styles.subSectionWrapper, "flexCol")}>
        <h3 className={cx(styles.title)}>{userData?.documents?.title}</h3>
        <p className={cx(styles.info, "flexRow-align-center")}>
          {Array.isArray(userData?.documents?.files) &&
            userData?.documents?.files.map((item) => {
              return (
                <span key={item} className={cx(styles.listItem, "flexRow")}>
                  <img src={paperIcon} alt='paper-icon' />
                  {item}
                </span>
              );
            })}
        </p>
      </div>

      <div className={cx(styles.subSectionWrapper, "flexCol")}>
        <h3 className={cx(styles.title)}>{userData?.website?.title}</h3>
        <p className={cx(styles.title, styles.website)}>{userData?.website?.response}</p>
      </div>

      <div className={cx(styles.socialInfoDiv, "flexCol")}>
        <div className={cx(styles.wrapper, "flexCol")}>
          {Array.isArray(userData?.socialInfoData) &&
            userData?.socialInfoData.map((data) => (
              <div key={data.id} className={cx(styles.socialInfo, "flexRow-align-center")}>
                <img src={data.icon} alt={`${data.title} icon`} />
                <h6 className={cx(styles.socialUserName)}>{data.username}</h6>
              </div>
            ))}
        </div>
      </div>

      <div className={cx(styles.btnDiv, "flexRow-align-center")}>
        {userStatus === "activate" ? (
          <Button onClick={() => handleSetUserStatus("deactivate")} title='Deactivate Mentor' />
        ) : (
          <Button onClick={() => handleSetUserStatus("activate")} title='Activate Mentor' />
        )}
      </div>

      {displayModal && modalName === "successNotification" ? <SuccessNotificationModal show size='md' /> : null}
    </div>
  );
};

export default About;
