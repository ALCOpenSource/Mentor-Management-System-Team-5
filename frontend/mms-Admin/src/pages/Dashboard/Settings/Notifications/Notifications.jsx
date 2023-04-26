import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import cx from "classnames";
import styles from "./Notifications.module.scss";
import ToggleSwitch from "@/components/ToggleSwitch/ToggleSwitch";
import { getUserNotifications, editUserNotifications } from "@/redux/Settings/SettingsSlice";
import Loader from "@/components/Loader/Loader";

function Notifications() {
  const dispatch = useDispatch();
  const userNotificationsData = useSelector((state) => state?.settings?.getUserNotificationsData);

  useEffect(() => {
    dispatch(getUserNotifications());
  }, [dispatch]);

  const handleEditUserNotification = async (status, category) => {
    const payload = {
      ...userNotificationsData,
      [category]: status
    };
    let response = await dispatch(editUserNotifications(payload));
    response?.success && dispatch(getUserNotifications());
  };

  return (
    <div className={cx(styles.notificationsContainer, "flexCol")}>
      {Object.keys(userNotificationsData).length === 0 ? (
        <Loader small={false} />
      ) : (
        <>
          <div className={cx(styles.wrapper, "flexCol")}>
            <h6 className={cx(styles.heading)}>General Notifications</h6>
            <div className={cx(styles.toggleHeadersWrapper, "flexRow-right-centered")}>
              <h6 className={cx(styles.title)}>Email</h6>
              <h6 className={cx(styles.title)}>In-app</h6>
            </div>
            <div className={cx(styles.infoWrapper, "flexRow-space-between")}>
              <h6 className={cx(styles.infoTitle)}>All Notifications</h6>
              <div className={cx(styles.switchWrapper, "flexRow")}>
                <ToggleSwitch
                  checkedStatus={userNotificationsData.allNotificationEmail}
                  onChange={(status) => handleEditUserNotification(status, "allNotificationEmail")}
                />
                <ToggleSwitch
                  checkedStatus={userNotificationsData.allNotificationInApp}
                  onChange={(status) => handleEditUserNotification(status, "allNotificationInApp")}
                />
              </div>
            </div>
            <div className={cx(styles.infoWrapper, "flexRow-space-between")}>
              <h6 className={cx(styles.infoTitle)}>Programs</h6>
              <div className={cx(styles.switchWrapper, "flexRow")}>
                <ToggleSwitch
                  checkedStatus={userNotificationsData.programEmail}
                  onChange={(status) => handleEditUserNotification(status, "programEmail")}
                />
                <ToggleSwitch
                  checkedStatus={userNotificationsData.programInApp}
                  onChange={(status) => handleEditUserNotification(status, "programInApp")}
                />
              </div>
            </div>
            <div className={cx(styles.infoWrapper, "flexRow-space-between")}>
              <h6 className={cx(styles.infoTitle)}>Tasks</h6>
              <div className={cx(styles.switchWrapper, "flexRow")}>
                <ToggleSwitch
                  checkedStatus={userNotificationsData.taskEmail}
                  onChange={(status) => handleEditUserNotification(status, "taskEmail")}
                />
                <ToggleSwitch
                  checkedStatus={userNotificationsData.taskInApp}
                  onChange={(status) => handleEditUserNotification(status, "taskInApp")}
                />
              </div>
            </div>
            <div className={cx(styles.infoWrapper, "flexRow-space-between")}>
              <h6 className={cx(styles.infoTitle)}>Approval Requests</h6>
              <div className={cx(styles.switchWrapper, "flexRow")}>
                <ToggleSwitch
                  checkedStatus={userNotificationsData.approvalRequestEmail}
                  onChange={(status) => handleEditUserNotification(status, "approvalRequestEmail")}
                />
                <ToggleSwitch
                  checkedStatus={userNotificationsData.approvalRequestInApp}
                  onChange={(status) => handleEditUserNotification(status, "approvalRequestInApp")}
                />
              </div>
            </div>
            <div className={cx(styles.infoWrapper, "flexRow-space-between")}>
              <h6 className={cx(styles.infoTitle)}>Reports</h6>
              <div className={cx(styles.switchWrapper, "flexRow")}>
                <ToggleSwitch
                  checkedStatus={userNotificationsData.reportsEmail}
                  onChange={(status) => handleEditUserNotification(status, "reportsEmail")}
                />
                <ToggleSwitch
                  checkedStatus={userNotificationsData.reportsInApp}
                  onChange={(status) => handleEditUserNotification(status, "reportsInApp")}
                />
              </div>
            </div>
          </div>

          <div className={cx(styles.wrapper, "flexCol")}>
            <h6 className={cx(styles.heading)}>Discussion Notifications</h6>
            <div className={cx(styles.toggleHeadersWrapper, "flexRow-right-centered")}>
              <h6 className={cx(styles.title)}>Email</h6>
              <h6 className={cx(styles.title)}>In-app</h6>
            </div>
            <div className={cx(styles.infoWrapper, "flexRow-space-between")}>
              <h6 className={cx(styles.infoTitle)}>Comments on my post</h6>
              <div className={cx(styles.switchWrapper, "flexRow")}>
                <ToggleSwitch
                  checkedStatus={userNotificationsData.postCommentsEmail}
                  onChange={(status) => handleEditUserNotification(status, "postCommentsEmail")}
                />
                <ToggleSwitch
                  checkedStatus={userNotificationsData.postCommentsInApp}
                  onChange={(status) => handleEditUserNotification(status, "postCommentsInApp")}
                />
              </div>
            </div>
            <div className={cx(styles.infoWrapper, "flexRow-space-between")}>
              <h6 className={cx(styles.infoTitle)}>Posts</h6>
              <div className={cx(styles.switchWrapper, "flexRow")}>
                <ToggleSwitch
                  checkedStatus={userNotificationsData.postsEmail}
                  onChange={(status) => handleEditUserNotification(status, "postsEmail")}
                />
                <ToggleSwitch
                  checkedStatus={userNotificationsData.postsInApp}
                  onChange={(status) => handleEditUserNotification(status, "postsInApp")}
                />
              </div>
            </div>
            <div className={cx(styles.infoWrapper, "flexRow-space-between")}>
              <h6 className={cx(styles.infoTitle)}>Comments</h6>
              <div className={cx(styles.switchWrapper, "flexRow")}>
                <ToggleSwitch
                  checkedStatus={userNotificationsData.commentsEmail}
                  onChange={(status) => handleEditUserNotification(status, "commentsEmail")}
                />
                <ToggleSwitch
                  checkedStatus={userNotificationsData.commentsInApp}
                  onChange={(status) => handleEditUserNotification(status, "commentsInApp")}
                />
              </div>
            </div>
            <div className={cx(styles.infoWrapper, "flexRow-space-between")}>
              <h6 className={cx(styles.infoTitle)}>Mentions</h6>
              <div className={cx(styles.switchWrapper, "flexRow")}>
                <ToggleSwitch
                  checkedStatus={userNotificationsData.mentionsEmail}
                  onChange={(status) => handleEditUserNotification(status, "mentionsEmail")}
                />
                <ToggleSwitch
                  checkedStatus={userNotificationsData.mentionsInApp}
                  onChange={(status) => handleEditUserNotification(status, "mentionsInApp")}
                />
              </div>
            </div>
            <div className={cx(styles.infoWrapper, "flexRow-space-between")}>
              <h6 className={cx(styles.infoTitle)}>Direct Messages</h6>
              <div className={cx(styles.switchWrapper, "flexRow")}>
                <ToggleSwitch
                  checkedStatus={userNotificationsData.directMessageEmail}
                  onChange={(status) => handleEditUserNotification(status, "directMessageEmail")}
                />
                <ToggleSwitch
                  checkedStatus={userNotificationsData.directMessageInApp}
                  onChange={(status) => handleEditUserNotification(status, "directMessageInApp")}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Notifications;
