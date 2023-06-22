import React, { useState, useEffect } from "react";
import cx from "classnames";
import styles from "./MentorManagerDetails.module.scss";
import profileImage from "@/assets/images/sample-profile-image.svg";
import GenericSideBar from "@/components/GenericSideBar/GenericSideBar";
import UserComponent from "../UserComponent/UserComponent";
import Button from "@/components/Button/Button";
import backIcon from "@/assets/icons/back-icon.svg";
import Search from "@/components/Search/Search";
import useIsMobile from "@/hooks/useIsMobile";
import Tabs from "@/components/Tabs/Tabs";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "@/redux/Modal/ModalSlice";
import flagIcon from "@/assets/icons/flag-icon.svg";
import subMenuIcon from "@/assets/icons/sub-menu-icon.svg";
import editIcon from "@/assets/icons/edit-icon.svg";
import EditUserRoleModal from "@/components/Modals/EditUserRole/EditUserRole";
import { getAllUserProfiles } from "@/redux/Profile/ProfileSlice";

const MentorManagerDetails = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = useParams()?.id;

  const [openSideBar, setOpenSideBar] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const [collapseInput, setCollapseInput] = useState(true);
  const [mentorManagersArray, setMentorManagersArray] = useState([]);

  const displayModal = useSelector((state) => state.modal.show);
  const modalName = useSelector((state) => state.modal.modalName);
  const allUserProfilesData = useSelector((state) => state.profile.getAllUserProfilesData);

  useEffect(() => {
    dispatch(getAllUserProfiles());
  }, [dispatch]);

  useEffect(() => {
    setMentorManagersArray(
      Array.isArray(allUserProfilesData) &&
        allUserProfilesData.filter((item) => item.roles.find((role) => role.toLowerCase() === "manager"))
    );
  }, [allUserProfilesData]);

  useEffect(() => {
    if (isMobile) {
      setOpenSideBar(false);
    } else {
      setOpenSideBar(true);
    }
  }, [isMobile]);

  useEffect(() => {
    setSelectedUser(Array.isArray(mentorManagersArray) && mentorManagersArray.find((item) => item.id === userId));
  }, [mentorManagersArray, userId]);

  const handleSelectedItem = (item) => {
    console.log(item);
  };

  const handleOpenSideBar = (e, open) => {
    e.preventDefault();
    setOpenSideBar(open);
  };

  const handleSearchInput = (e) => {
    console.log(e);
  };

  const handleCloseSelectElement = () => {
    // Added to clear console errors
  };

  const handleViewUser = (user) => {
    setSelectedUser(user);
    navigate(`/dashboard/mentor-managers/mentor-manager-details/${user?.id}`);

    if (isMobile) {
      setOpenSideBar(false);
    }
  };

  const editUserRole = () => {
    console.log("edit user role");
    dispatch(
      showModal({
        name: "editUserRole",
        modalData: {
          title: "Edit User Role"
        }
      })
    );
  };

  const getListComponents = (data) => {
    const listItems =
      Array.isArray(data) &&
      data.map((item, index) => {
        return {
          component: <UserComponent onClick={handleViewUser} key={index} data={item} />,
          id: item.id
        };
      });

    const headerComponent = (
      <>
        <div className={cx(styles.sideBarHeader, "flexRow-space-between")}>
          <div
            style={{ display: !isMobile && !collapseInput ? "none" : "flex" }}
            className={cx(styles.titleDiv, "flexRow-align-center")}
          >
            {isMobile && (
              <img
                onClick={() => setOpenSideBar(!openSideBar)}
                src={backIcon}
                className={cx(styles.backIcon)}
                alt='close-icon'
              />
            )}
            {collapseInput && <h3 className={cx(styles.title)}>Mentor Managers</h3>}
          </div>
          <div className={cx(styles.searchWrapper)}>
            <Search
              inputPlaceholder='Search for Mentor manager...'
              onChange={handleSearchInput}
              collapseInput={collapseInput}
              setCollapseInput={setCollapseInput}
              closeSelectElement={handleCloseSelectElement}
            />
          </div>
          {/* <Filter
            dropdownItems={[
              { label: "All", value: "all" },
              { label: "Mentors", value: "mentor" },
              { label: "Mentor Managers", value: "mentor-manager" }
            ]}
            selectedFilterItem={handleSelectedFilterItem}
            closeSearchInput={handleCloseSearchInput}
            closeSelectElement={closeSelectElement}
            setCloseSelectElement={setCloseSelectElement}
          /> */}
        </div>
      </>
    );

    return { listItems, headerComponent };
  };

  const getTabMenu = () => {
    let menuObject = {
      about: "About",
      programs: "Programs",
      mentors: "Mentors",
      tasks: "Tasks",
      certificates: "Certificates"
    };

    const tabMenu = Object.keys(menuObject).map((key) => {
      return {
        id: key,
        name: menuObject[key],
        path: key
      };
    });
    return tabMenu;
  };

  const handleTabMenuClick = (tab) => {
    navigate(tab.path);
  };

  return (
    <div className={cx(styles.mentorManagerDetailsContainer, "flexCol")}>
      {openSideBar ? (
        <div className={cx(styles.sideBarSection)}>
          <GenericSideBar selectedMenuItem={handleSelectedItem} data={getListComponents(mentorManagersArray)} />
        </div>
      ) : null}

      <div className={cx(styles.outletDiv, "flexCol")}>
        <div className={cx(styles.outletHeading, "flexRow")}>
          <div className={cx(styles.profile, "flexCol")}>
            <div className={cx(styles.bioSummary, "flexRow-align-center")}>
              <img
                className={cx(styles.profileImage)}
                src={selectedUser?.profileImage || profileImage}
                alt='profile-image'
              />

              <div className={cx(styles.info, "flexRow")}>
                <div className={cx(styles.nameAndRole, "flexCol")}>
                  <p className={cx(styles.name)}>
                    {" "}
                    {selectedUser?.firstName && selectedUser?.firstName}{" "}
                    {selectedUser?.lastName && selectedUser?.lastName}
                  </p>
                  <p className={cx(styles.role)}>
                    {"Mentor Manager"} <img onClick={() => editUserRole()} src={editIcon} alt='edit-icon' />{" "}
                  </p>
                </div>

                <img className={cx(styles.flagIcon)} src={flagIcon} alt='flag' />
              </div>
            </div>
            <div className={cx(styles.btnGroup, "flexRow-align-center")}>
              <Button
                onClick={() => navigate("/dashboard/messages/chats/1")}
                title='Send Message'
                size={"small"}
                className={cx(styles.editBtn)}
              />
              <Button
                onClick={() => navigate("/dashboard/mentor-managers")}
                type='secondary'
                title='Close'
                size={"small"}
                className={cx(styles.viewBtn)}
              />
            </div>
          </div>
          {isMobile && (
            <div className={cx(styles.togglerDiv, "flexCol-fully-centered")}>
              <img
                className={cx(styles.toggler)}
                src={subMenuIcon}
                alt='toggler'
                onClick={(e) => handleOpenSideBar(e, true)}
              />
              <small className={cx(styles.togglerText)}>All Users</small>
            </div>
          )}
        </div>

        <div className={cx(styles.outletBody, "flexCol")}>
          <div className={cx(styles.tabsWrapper, "flexCol")}>
            <Tabs data={getTabMenu()} onClick={handleTabMenuClick} />
          </div>

          <div className={cx(styles.contentWrapper)}>
            <Outlet />
          </div>
        </div>
      </div>
      {displayModal && modalName === "editUserRole" ? <EditUserRoleModal show size='md' /> : null}
    </div>
  );
};

export default MentorManagerDetails;
