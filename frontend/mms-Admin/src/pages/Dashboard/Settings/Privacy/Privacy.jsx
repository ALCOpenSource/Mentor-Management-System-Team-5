import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cx from "classnames";
import styles from "./Privacy.module.scss";
import ToggleSwitch from "@/components/ToggleSwitch/ToggleSwitch";
import { getUserPrivacy, editUserPrivacy } from "@/redux/Settings/SettingsSlice";

function Privacy() {
  const dispatch = useDispatch();
  const getUserPrivacyLoading = useSelector((state) => state?.loading?.getUserPrivacyLoading);
  const userPrivacyData = useSelector((state) => state?.settings?.getUserPrivacyData);
  const [userPrivacyArray, setUserPrivacyArray] = useState([]);

  useEffect(() => {
    dispatch(getUserPrivacy());
  }, [dispatch]);

  useEffect(() => {
    if (Object.keys(userPrivacyData).length > 0) {
      let array = Object.keys(userPrivacyData).map((key) => {
        switch (key) {
          case "showContactInfo":
            return {
              title: "Show contact info",
              key: key,
              value: userPrivacyData[key]
            };
          case "showGithub":
            return {
              title: "Show GitHub",
              key: key,
              value: userPrivacyData[key]
            };
          case "showInstagram":
            return {
              title: "Show Instagram",
              key: key,
              value: userPrivacyData[key]
            };
          case "showLinkedIn":
            return {
              title: "Show LinkedIn",
              key: key,
              value: userPrivacyData[key]
            };
          case "showTwitter":
            return {
              title: "Show Twitter",
              key: key,
              value: userPrivacyData[key]
            };
          default:
            break;
        }
      });
      setUserPrivacyArray(array);
    }
  }, [userPrivacyData, getUserPrivacyLoading]);

  const handleEditUserPrivacy = async (status, category) => {
    const payload = {
      ...userPrivacyData,
      [category]: status
    };
    let response = await dispatch(editUserPrivacy(payload));
    response?.success && dispatch(getUserPrivacy());
  };

  return (
    <div className={cx(styles.privacyContainer, "flexCol")}>
      {Object.keys(userPrivacyData).length === 0 ? (
        <p>loading</p>
      ) : (
        Array.isArray(userPrivacyArray) &&
        userPrivacyArray.map((category) => {
          return (
            <div className={cx(styles.infoWrapper, "flexRow-space-between")} key={category?.key}>
              <h6 className={cx(styles.infoTitle)}>{category.title}</h6>
              <div className={cx(styles.switchWrapper, "flexRow")}>
                <ToggleSwitch
                  initialState={category?.value}
                  checkedState={category.value}
                  onChange={(status) => handleEditUserPrivacy(status, category.key)}
                />
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Privacy;
