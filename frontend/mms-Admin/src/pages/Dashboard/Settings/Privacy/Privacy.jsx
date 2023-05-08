import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cx from "classnames";
import styles from "./Privacy.module.scss";
import ToggleSwitch from "@/components/ToggleSwitch/ToggleSwitch";
import { getUserPrivacy, editUserPrivacy } from "@/redux/Settings/SettingsSlice";
import Loader from "@/components/Loader/Loader";
import Button from "@/components/Button/Button";
import { useForm, Controller } from "react-hook-form";

function Privacy() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state?.loading?.editUserPrivacyLoading);
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

  const handleEditUserPrivacy = async (data) => {
    let response = await dispatch(editUserPrivacy(data));
    response?.success && dispatch(getUserPrivacy());
  };

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset
  } = useForm({ mode: "all" });

  useEffect(() => {
    reset(userPrivacyData);
  }, [reset, userPrivacyData]);

  return (
    <div className={cx(styles.privacyContainer, "flexCol")}>
      {Object.keys(userPrivacyData).length === 0 ? (
        <Loader small={false} />
      ) : (
        <form
          className={cx(styles.formWrapper, "flexCol")}
          onSubmit={handleSubmit((data) => handleEditUserPrivacy(data))}
        >
          {Array.isArray(userPrivacyArray) &&
            userPrivacyArray.map((category) => {
              return (
                <div className={cx(styles.infoWrapper, "flexRow-space-between")} key={category?.key}>
                  <h6 className={cx(styles.infoTitle)}>{category.title}</h6>
                  <div className={cx(styles.switchWrapper, "flexRow")}>
                    <Controller
                      name={`${category?.key}`}
                      control={control}
                      render={({ field }) => (
                        <ToggleSwitch
                          {...field}
                          error={errors[`${category?.key}`] && errors[`${category?.key}`]?.message}
                          checkedStatus={category.value}
                        />
                      )}
                    />
                  </div>
                </div>
              );
            })}
          <Button
            loading={loading}
            disabled={loading}
            onClick={handleSubmit((data) => handleEditUserPrivacy(data))}
            title='Save Changes'
          />
        </form>
      )}
    </div>
  );
}

export default Privacy;
