import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import cx from "classnames";
import styles from "./EditTask.module.scss";
import Button from "@/components/Button/Button";
import { ReactComponent as ClearListIcon } from "@/assets/icons/clear-list-icon.svg";
import closeIcon from "@/assets/icons/undo-icon.svg";
import SelectionSideBar from "@/components/SelectionSideBar/SelectionSideBar";
import InputField from "@/components/Input/Input";
import TextArea from "@/components/TextArea/TextArea";
import Search from "@/components/Search/Search";
import SuccessNotificationModal from "@/components/Modals/SuccessNotification/SuccessNotification";
import { showModal } from "@/redux/Modal/ModalSlice";
import successImage from "@/assets/images/create-task-success-image.svg";
import { useForm, Controller } from "react-hook-form";
import { editTaskSchema } from "@/helpers/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import PersonelComponent from "@/pages/Dashboard/Tasks/PersonelComponent/PersonelComponent";
// import { getAllMentors } from "@/redux/Mentors/MentorsSlice";
// import { getAllMentorManagers } from "@/redux/MentorManagers/MentorManagersSlice";
import { getTaskDetails, editTask } from "@/redux/Tasks/TasksSlice";
import { useParams } from "react-router-dom";
import closeIconAlt from "@/assets/icons/close-icon.svg";
import { useNavigate } from "react-router-dom";
import { getAllUserProfiles } from "@/redux/Profile/ProfileSlice";

const EditTask = () => {
  const params = useParams();
  const taskId = params.id;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [openSideBar, setOpenSideBar] = useState({
    open: false,
    category: ""
  });
  const [collapseInput, setCollapseInput] = useState(true);
  const [selectedMentorManagers, setSelectedMentorManagers] = useState([]);
  const [selectedMentors, setSelectedMentors] = useState([]);

  const displayModal = useSelector((state) => state.modal.show);
  const modalName = useSelector((state) => state.modal.modalName);
  const taskDetails = useSelector((state) => state.tasks.getTaskDetailsData);
  // const allMentorsData = useSelector((state) => state.mentors.getAllMentorsData);
  // const allMentorManagersData = useSelector((state) => state.mentorManagers.getAllMentorManagersData);
  const editTaskLoading = useSelector((state) => state.loading.editTaskLoading);

  const allUserProfilesData = useSelector((state) => state.profile.getAllUserProfilesData);

  useEffect(() => {
    // dispatch(getAllMentors());
    // dispatch(getAllMentorManagers());
    dispatch(getAllUserProfiles());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTaskDetails(taskId));
  }, [dispatch, taskId]);

  const resolver = yupResolver(editTaskSchema);

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset
  } = useForm({ resolver, mode: "all" });

  useEffect(() => {
    reset({
      title: taskDetails?.title,
      description: taskDetails?.description
    });
    setSelectedMentorManagers(taskDetails?.mentorManagers.map((data) => data?.id));
    setSelectedMentors(taskDetails?.mentors.map((data) => data?.id));
  }, [reset, taskDetails]);

  const handleEditTask = async (data) => {
    // let formattedMentorManagerIds = selectedMentorManagers.map((id) => {
    //   return { mentorManagerId: id };
    // });
    // let formattedMentorIds = selectedMentors.map((id) => {
    //   return { programsMentorId: id };
    // });

    let payload = {
      ...data,
      id: taskId,
      managers: [],
      mentors: []
    };

    const response = await dispatch(editTask(payload));
    if (response.success) {
      setSelectedMentorManagers([]);
      setSelectedMentors([]);

      dispatch(
        showModal({
          name: "successNotification",
          modalData: {
            title: "Task updated successfully",
            image: successImage,
            redirectUrl: "/dashboard/tasks"
          }
        })
      );
    }
  };

  const handleOpenSideBar = (e, open, category) => {
    e.preventDefault();
    setOpenSideBar({ open, category });
  };

  const handleSearchInput = (e) => {
    console.log(e.target.value);
  };

  const getListComponents = (data, selectedUsers) => {
    let listItems = data.map((item) => {
      return {
        component: (
          <PersonelComponent
            key={item?.id}
            data={item}
            checked={selectedUsers.some((userId) => userId === item?.id)}
            handleChecked={handleSelectedItem}
          />
        ),
        id: item.id
      };
    });

    const headerComponent = (
      <div className={cx(styles.filterAndSearchDiv, "flexRow-align-center")}>
        {collapseInput && (
          <h6 className={cx(styles.title)}>
            {openSideBar?.category === "mentor-manager" ? "Select Mentor Manager(s)" : "Select Mentor(s)"}
          </h6>
        )}
        <div className={cx(styles.searchWrapper)}>
          <Search
            inputPlaceholder={openSideBar?.category === "mentor-manager" ? "Search for Mentor Manager" : "Search for Mentor"}
            onChange={handleSearchInput}
            collapseInput={collapseInput}
            setCollapseInput={setCollapseInput}
          />
        </div>

        <img
          src={closeIcon}
          className={cx(styles.closeIcon)}
          alt='close-icon'
          onClick={() => setOpenSideBar({ open: false })}
        />
      </div>
    );

    return { listItems, headerComponent };
  };

  const handleSelectedItem = (itemId) => {
    if (openSideBar.category === "mentor-manager") {
      if (selectedMentorManagers.find((userId) => userId === itemId)) {
        let filteredMentorManagers = selectedMentorManagers.filter((id) => id !== itemId);
        setSelectedMentorManagers(filteredMentorManagers);
      } else {
        setSelectedMentorManagers([...selectedMentorManagers, `${itemId}`]);
      }
    }
    if (openSideBar.category === "mentor") {
      if (selectedMentors.find((userId) => userId === itemId)) {
        let filteredMentors = selectedMentors.filter((id) => id !== itemId);
        setSelectedMentors(filteredMentors);
      } else {
        setSelectedMentors([...selectedMentors, `${itemId}`]);
      }
    }
  };

  const handleSideBarMenuClick = () => {
    // This is added to remove the warning of unused function in the selection sidebar component
  };

  const handleClearList = (category) => {
    if (category === "mentorManager") {
      setSelectedMentorManagers([]);
    } else if (category === "mentor") {
      setSelectedMentors([]);
    }
  };

  const getUsers = (category) => {
    if (category === "mentorManager") {
      return (
        Array.isArray(allUserProfilesData) &&
        allUserProfilesData.filter((item) => item.roles.find((role) => role.toLowerCase() === "manager"))
      );
    }
    if (category === "mentor") {
      return (
        Array.isArray(allUserProfilesData) &&
        allUserProfilesData.filter((item) => item.roles.find((role) => role.toLowerCase() === "mentor"))
      );
    }
  };

  return (
    <div className={cx(styles.editTaskContainer, "flexRow")}>
      <div className={cx(styles.mainSection, "flexCol")}>
        <div className={cx(styles.heading, "flexRow-space-between")}>
          <h3 className={cx(styles.title)}>Edit Task</h3>
          <img onClick={() => navigate("/dashboard/tasks")} src={closeIconAlt} alt='close-icon' />
        </div>

        <div className={cx(styles.formWrapper, "flexCol")}>
          <form onSubmit={handleSubmit((data) => handleEditTask(data))}>
            <label htmlFor='title'>Title</label>
            <Controller
              name='title'
              control={control}
              render={({ field }) => (
                <InputField
                  {...field}
                  placeholder='Enter a title'
                  type='text'
                  error={errors?.title && errors?.title?.message}
                />
              )}
            />

            <label htmlFor='description'>Details</label>
            <Controller
              name='description'
              control={control}
              render={({ field }) => (
                <TextArea
                  {...field}
                  placeholder={"Enter task description"}
                  minHeight='150px'
                  error={errors?.description && errors?.description?.message}
                />
              )}
            />

            <div className={cx(styles.selectionDiv, "flexRow-space-between")}>
              <div className={cx(styles.wrapper, "flexRow-align-center")}>
                <div className={cx(styles.leftSide, "flexCol")}>
                  <h6 className={cx(styles.title)}>Add Mentor Manager</h6>
                  <div className={cx(styles.statsDiv, "flexRow")}>
                    <span className={cx(styles.stats)}>
                      {Array.isArray(selectedMentorManagers) && selectedMentorManagers.length} selected
                    </span>
                    <ClearListIcon onClick={() => handleClearList("mentorManager")} />
                  </div>
                </div>
                <Button title='Select' size='small' onClick={(e) => handleOpenSideBar(e, true, "mentor-manager")} />
              </div>

              <div className={cx(styles.wrapper, "flexRow-align-center")}>
                <div className={cx(styles.leftSide, "flexCol")}>
                  <h6 className={cx(styles.title)}>Add Mentor</h6>
                  <div className={cx(styles.statsDiv, "flexRow")}>
                    <span className={cx(styles.stats)}>
                      {Array.isArray(selectedMentors) && selectedMentors.length} selected
                    </span>
                    <ClearListIcon onClick={() => handleClearList("mentor")} />
                  </div>
                </div>
                <Button title='Select' size='small' onClick={(e) => handleOpenSideBar(e, true, "mentor")} />
              </div>
            </div>

            <div className={cx(styles.submitBtnDiv, "flexRow")}>
              <Button
                onClick={handleSubmit((data) => handleEditTask(data))}
                loading={editTaskLoading}
                disabled={editTaskLoading}
                title='Update Task'
                type='primary'
              />
            </div>
          </form>
        </div>
      </div>

      {openSideBar.open && openSideBar.category === "mentor-manager" ? (
        <div className={cx(styles.sideBarSection)}>
          <SelectionSideBar
            selectedMenuItem={handleSideBarMenuClick}
            data={getListComponents(getUsers("mentorManager"), selectedMentorManagers)}
          />
        </div>
      ) : openSideBar.open && openSideBar.category === "mentor" ? (
        <div className={cx(styles.sideBarSection)}>
          <SelectionSideBar
            selectedMenuItem={handleSideBarMenuClick}
            data={getListComponents(getUsers("mentor"), selectedMentors)}
          />
        </div>
      ) : null}

      {displayModal && modalName === "successNotification" ? <SuccessNotificationModal show size='md' /> : null}
    </div>
  );
};

export default EditTask;
