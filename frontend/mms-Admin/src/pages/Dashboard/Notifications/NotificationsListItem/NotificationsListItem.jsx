import React, { useState }  from 'react';
import cx from "classnames";
import styles from "./NotificationsListItem.module.scss";
import caretUp from "@/assets/icons/caret-up-icon.svg";
import moreIcon from "@/assets/icons/more-horizontal-black.svg";
import PropTypes from "prop-types";



function NotificationsListItem({ data, setItemStatus }) {
    
    const [isDropdownOpen, setIsDropdownOpen] = useState({
        status: false,
        id: ""
    });

      const dropdownListArray = [
        {
          name: "Read",
          key: "read"
        },
        {
          name: "Unread",
          key: "unread"
        }
      ];
    
      const handleDropdownToggle = (id) => {
        setIsDropdownOpen({
          ...isDropdownOpen,
          status: !isDropdownOpen.status,
          id: id
        });
      };
    
      const toggleDataStatus = (item, statusValue) => {
        const updatedNotifications = { ...item, status: statusValue };
        setItemStatus((prevNotifications) =>
          prevNotifications.map((notification) => (notification.id === item.id ? updatedNotifications : notification))
        );
      };

    const handleDropdownListClick = (type, data) => {
        setIsDropdownOpen(false);
        if(type==="read"){
            toggleDataStatus(data, true);
        }
        if(type==="unread"){
            toggleDataStatus(data, false);
        }
    };
    
    return (
        <div className={cx([styles.cardWrapper, data.status===true ? styles.cardWrapperRead : ''] , "flexCol")}>
            <div className={cx(styles.cardHeader, "flexRow-space-between")}>
                <div className={cx(styles.cardIcon)}>
                    <img src={data.avatar} alt={`${data.name}'s avatar`} />
                </div>
                <div className={cx(styles.metaData, "flexCol")}>
                    <div className={cx(styles.metaDataTitle)}><b>{data.name}</b> {data.action} <b>{data.certificate_owner && data.certificate_owner} {data.post && data.post}</b></div>
                    <div className={cx(styles.dateTime, "flexRow")}>
                        <span className={cx(styles.value)}>{data?.date}</span>
                    </div>
                </div>
                <div className={cx(styles.moreOptionWrapper)}>
                    <img
                        className={cx(styles.icon)}
                        src={moreIcon}
                        alt='more-icon'
                        onClick={() => handleDropdownToggle(data?.id)}
                    />
                        {isDropdownOpen.status && isDropdownOpen.id === data?.id && (
                            <div className={cx(styles.dropdown)}>
                                <ul className={cx(styles.dropdownList)}>
                                {dropdownListArray.map((listItem) => {
                                    return (
                                    <li
                                        onClick={() => handleDropdownListClick(listItem?.key, data)}
                                        key={listItem.key}
                                        className={cx(styles.dropdownListItem)}
                                    >
                                        {listItem.name}
                                    </li>
                                    );
                                })}
                                </ul>
                                <img onClick={() => handleDropdownToggle(data?.id)} src={caretUp} alt='caret-up' />
                            </div>
                         )}
                </div>
            </div>
        </div>
    );
}

NotificationsListItem.propTypes = {
    data: PropTypes.object,
    setItemStatus: PropTypes.func,
};
export default NotificationsListItem