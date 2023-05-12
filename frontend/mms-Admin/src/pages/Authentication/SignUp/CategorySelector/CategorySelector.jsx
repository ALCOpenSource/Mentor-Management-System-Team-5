import React from "react";
import cx from "classnames";
import styles from "./CategorySelector.module.scss";
import { useNavigate } from "react-router-dom";
import AuthSideHero from "@/components/AuthSideHero/AuthSideHero";
import mentorIcon from "@/assets/icons/mentor-icon.svg";
import mentorManagerIcon from "@/assets/icons/mentor-manager-icon.svg";
import arrowRight from "@/assets/icons/arrow-right-icon.svg";
const CategorySelector = () => {
  const navigate = useNavigate();

  const selectorOptions = [
    {
      id: 1,
      title: "Mentor",
      description: "Oversee and guide learners from the start to finish",
      path: "",
      icon: mentorIcon
    },
    {
      id: 2,
      title: "Mentor Manager",
      description: "Manage mentors and learners across all learning track",
      path: "/sign-up/mentor-manager",
      icon: mentorManagerIcon
    }
  ];

  return (
    <div className={cx(styles.signUpContainer, "row")}>
      <div className={cx(styles.leftSection, "col-md-6", "col-sm-12")}>
        <AuthSideHero />
      </div>
      <div className={cx(styles.rightSection, "flexCol", "col-md-6", "col-sm-12")}>
        <div className={cx(styles.header, "flexCol")}>
          <h3 className={cx(styles.headerTitle)}>Join the team!</h3>
          <p className={cx(styles.caption)}>Select the option that best suits your interest on MMS to continue.</p>
        </div>
        <div className={cx(styles.selectorDiv, "flexCol")}>
          {selectorOptions.map((option) => {
            return (
              <div
                onClick={() => navigate(`${option?.path}`)}
                key={option?.id}
                className={cx(styles.cardWrapper, "flexRow-align-center")}
              >
                <div className={cx(styles.iconDiv, "flexRow-fully-centered")}>
                  <img className={cx(styles.categoryIcon)} src={option?.icon} alt='category-icon' />
                </div>
                <div className={cx(styles.content, "flexCol")}>
                  <h3 className={cx(styles.title)}>{option?.title}</h3>
                  <p className={cx(styles.description)}>{option?.description}</p>
                </div>
                <img src={arrowRight} alt='arrow-right' className={cx(styles.icon)} />
              </div>
            );
          })}
        </div>
        <div className={cx(styles.signInDiv, "flexRow-fully-centered")}>
          <p className={cx(styles.caption)}>
            Already a User? <span onClick={() => navigate("/login")}>Signin</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategorySelector;
