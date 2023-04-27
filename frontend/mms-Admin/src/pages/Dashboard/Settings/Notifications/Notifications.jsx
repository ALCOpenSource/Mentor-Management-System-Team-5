import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cx from "classnames";
import styles from "./Notifications.module.scss";
import ToggleSwitch from "@/components/ToggleSwitch/ToggleSwitch";
import { getUserNotifications, editUserNotifications } from "@/redux/Settings/SettingsSlice";
import Loader from "@/components/Loader/Loader";
import { titleCase } from "@/helpers/textTransform";
import Button from "@/components/Button/Button";
import { useForm, Controller } from "react-hook-form";

function Notifications() {
  const dispatch = useDispatch();
  const userNotificationsData = useSelector((state) => state?.settings?.getUserNotificationsData);
  const loading = useSelector((state) => state?.loading?.editUserNotificationsLoading);

  const [formattedDataObj, setFormattedDataObj] = useState({});
  // const [userNotificationsData, setUserNotificationsData] = useState(userNotificationsDetails);
  const [updateList, setUpdateList] = useState(false);

  useEffect(() => {
    dispatch(getUserNotifications());
  }, [dispatch]);

  const getPageData = (notificationData) => {
    let formattedDataObj = {};

    let generalListObj = {
      allNotification: "All Notifications",
      program: "Programs",
      task: "Tasks",
      approvalRequest: "Approval Requests",
      reports: "Reports"
    };
  
    let discussionListObj = {
      postComments: "Comments on my post",
      posts: "Posts",
      comments: "Comments",
      mentions: "Mentions",
      directMessage: "Direct Messages"
    };
      Object.keys(notificationData).map((key) => {
        let slicedKey = key.slice(0, -5);
        let category = key.slice(-5).toLowerCase();

        if(generalListObj[slicedKey]){
          formattedDataObj["general"] = formattedDataObj["general"] || {};
          formattedDataObj.general[slicedKey] = {...formattedDataObj.general[slicedKey], [category] : notificationData[key], title: generalListObj[slicedKey]};
        } else if(discussionListObj[slicedKey]){
          formattedDataObj["discussion"] = formattedDataObj["discussion"] || {};
          formattedDataObj.discussion[slicedKey] = {...formattedDataObj.discussion[slicedKey], [category] : notificationData[key], title: discussionListObj[slicedKey]};
        }
      });
    return formattedDataObj;
  };


  useEffect(() => {
    let formattedDataObj = {};

    let generalListObj = {
      allNotification: "All Notifications",
      program: "Programs",
      task: "Tasks",
      approvalRequest: "Approval Requests",
      reports: "Reports"
    };
  
    let discussionListObj = {
      postComments: "Comments on my post",
      posts: "Posts",
      comments: "Comments",
      mentions: "Mentions",
      directMessage: "Direct Messages"
    };

    if (Object.keys(userNotificationsData).length > 0) {
      Object.keys(userNotificationsData).map((key) => {
        let slicedKey = key.slice(0, -5);
        let category = key.slice(-5).toLowerCase();

        if(generalListObj[slicedKey]){
          formattedDataObj["general"] = formattedDataObj["general"] || {};
          formattedDataObj.general[slicedKey] = {...formattedDataObj.general[slicedKey], [category] : userNotificationsData[key], title: generalListObj[slicedKey]};
        } else if(discussionListObj[slicedKey]){
          formattedDataObj["discussion"] = formattedDataObj["discussion"] || {};
          formattedDataObj.discussion[slicedKey] = {...formattedDataObj.discussion[slicedKey], [category] : userNotificationsData[key], title: discussionListObj[slicedKey]};
        }
      });
    }
    setFormattedDataObj(formattedDataObj);
  }, [userNotificationsData]);
  
  console.log(formattedDataObj, "formattedDataObj");
  console.log(userNotificationsData, "user notification data");

  const handleEditUserNotifications = async (data) => {
    console.log(data, "data");
    let response = await dispatch(editUserNotifications(data));
    response?.success && dispatch(getUserNotifications());
  };

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
    setValue
  } = useForm({ mode: "all" });

  // useEffect(() => {
  //   reset(userNotificationsData);
  // }, [reset, userNotificationsData]);

  const handleToggleChange = (status, key) => {
    // setValue(key, status);    
    let copiedList = {...userNotificationsData};

    if(key === "allNotificationEmail") {
      Object.keys(copiedList).map((item) => {
        item.includes("Email") && (copiedList[item] = status);
  });
let answer =  getPageData(copiedList);
  // setFormattedDataObj(answer);
  // setUserNotificationsData(answer);
  setFormattedDataObj({...formattedDataObj, ...answer});

  // setUpdateList(true);
  
} else if(key === "allNotificationInApp") {
  Object.keys(copiedList).map((item) => {
    item.includes("InApp") && (copiedList[item] = status);
  });
  getPageData(copiedList);

} 
else {
  copiedList[key] = status;
  getPageData(copiedList);
  setValue(key, status);
  
}
// setUpdateList(false);

console.log(copiedList, "updatedList");
// reset(copiedList);

  };
  
  useEffect(() => {
    console.log(formattedDataObj, "updateddddd list");
    setFormattedDataObj(formattedDataObj);
  }, [formattedDataObj]);

  useEffect(()=>{
    reset(userNotificationsData);
  },[reset, userNotificationsData]);

  return (
    <div className={cx(styles.notificationsContainer, "flexCol")}>
      {
        Object.keys(formattedDataObj).length === 0 ? 
          <Loader small={false} /> : 
          <form
          className={cx(styles.formWrapper, "flexCol")}
          onSubmit={handleSubmit((data) => handleEditUserNotifications(data))}
          >
          {Object.keys(formattedDataObj).map((key, index) => {
            return (
              <div className={cx(styles.wrapper, "flexCol")} key={index}>
                <h6 className={cx(styles.heading)}>{titleCase(key)} Notifications</h6>
                <div className={cx(styles.toggleHeadersWrapper, "flexRow-right-centered")}>
                  <h6 className={cx(styles.title)}>Email</h6>
                  <h6 className={cx(styles.title)}>In-app</h6>
                </div>
                {
                  Object.keys(formattedDataObj[key]).map((item, index) => {
                    return (
                      <div className={cx(styles.infoWrapper, "flexRow-space-between")} key={index}>
                        <h6 className={cx(styles.infoTitle)}>{formattedDataObj[key][item].title}</h6>
                        <div className={cx(styles.switchWrapper, "flexRow")}>
                        <Controller
                      name={`${item}Email`}
                      control={control}
                      render={({ field }) => (
                        <ToggleSwitch
                          {...field}
                          error={errors[`${item}Email`] && errors[`${item}Email`]?.message}
                          checkedStatus={formattedDataObj[key][item].email}
                          onChange={(status) => {handleToggleChange(status, `${item}Email`);}}
                        />
                      )}
                        />

<Controller
                      name={`${item}InApp`}
                      control={control}
                      render={({ field }) => (
                        <ToggleSwitch
                          {...field}
                          error={errors[`${item}InApp`] && errors[`${item}InApp`]?.message}
                          checkedStatus={formattedDataObj[key][item].inapp}

                          onChange={(status) => {handleToggleChange(status, `${item}InApp`);}}
                        />
                      )}
/>
                        </div>
                      </div>
                    );
                  })
                }
              </div>
            );
          }
        )}
                <Button
              loading={loading}
              disabled={loading}
              onClick={handleSubmit((data) => handleEditUserNotifications(data))}
              title='Save Changes'
                />
      </form>
        }
    </div>
  );
}

export default Notifications;
