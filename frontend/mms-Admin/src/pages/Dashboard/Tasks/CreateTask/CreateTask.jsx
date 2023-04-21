import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import cx from "classnames";
import styles from "./CreateTask.module.scss";
import Button from "@/components/Button/Button";
import { ReactComponent as ClearListIcon } from "@/assets/icons/clear-list-icon.svg";
import SelectionSideBar from "@/components/SelectionSideBar/SelectionSideBar";
import InputField from "@/components/Input/Input";
import TextArea from "@/components/TextArea/TextArea";
import FilterAndSearch from "@/components/FilterAndSearch/FilterAndSearch";
import SuccessNotificationModal from "@/components/Modals/SuccessNotification/SuccessNotification";
import { showModal } from "@/redux/Modal/ModalSlice";
import successImage from "@/assets/images/create-task-success-image.svg";

import { useForm, Controller } from "react-hook-form";
import { createTaskSchema } from "@/helpers/validation";
import { yupResolver } from "@hookform/resolvers/yup";

// import TaskListItem from "@/pages/Dashboard/Tasks/TaskListItem/TaskListItem";
import PersonelComponent from "@/pages/Dashboard/Tasks/PersonelComponent/PersonelComponent";
import mentorManagerImage from "@/assets/images/mentor-manager-thumbnail.svg";
import mentorImage from "@/assets/images/sample-profile-image.svg";

const CreateTask = () => {
  const dispatch = useDispatch();
  const displayModal = useSelector((state) => state.modal.show);
  const modalName = useSelector((state) => state.modal.modalName);

  const [openSideBar, setOpenSideBar] = useState({
    open: false,
    category: ""
  });

  const mentorsArray = [
    {
      id: 1,
      name: "Kabiru Omo Isaka",
      designation: "Program Assistant, Andela, He/Him",
      image: mentorImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      id: 2,
      name: "Kabiru Omo Isaka",
      designation: "Program Assistant, Andela, He/Him",
      image: mentorImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      id: 3,
      name: "Kabiru Omo Isaka",
      designation: "Program Assistant, Andela, He/Him",
      image: mentorImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      id: 4,
      name: "Kabiru Omo Isaka",
      designation: "Program Assistant, Andela, He/Him",
      image: mentorImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      id: 5,
      name: "Kabiru Omo Isaka",
      designation: "Program Assistant, Andela, He/Him",
      image: mentorImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      id: 6,
      name: "Kabiru Omo Isaka",
      designation: "Program Assistant, Andela, He/Him",
      image: mentorImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      id: 7,
      name: "Kabiru Omo Isaka",
      designation: "Program Assistant, Andela, He/Him",
      image: mentorImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      id: 8,
      name: "Kabiru Omo Isaka",
      designation: "Program Assistant, Andela, He/Him",
      image: mentorImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      id: 9,
      name: "Kabiru Omo Isaka",
      designation: "Program Assistant, Andela, He/Him",
      image: mentorImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    }
    // {
    //   id: 10,
    //   name: "Kabiru Omo Isaka",
    //   designation: "Program Assistant, Andela, He/Him",
    //   image: mentorImage,
    //   positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    // }
  ];

  const mentorManagersArray = [
    {
      id: 1,
      name: "Alice Davies",
      designation: "Program Assistant, Andela, Her/She",
      image: mentorManagerImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      id: 2,
      name: "Alice Davies",
      designation: "Program Assistant, Andela, Her/She",
      image: mentorManagerImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      id: 3,
      name: "Alice Davies",
      designation: "Program Assistant, Andela, Her/She",
      image: mentorManagerImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      id: 4,
      name: "Alice Davies",
      designation: "Program Assistant, Andela, Her/She",
      image: mentorManagerImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      id: 5,
      name: "Alice Davies",
      designation: "Program Assistant, Andela, Her/She",
      image: mentorManagerImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    }
  ];

  const resolver = yupResolver(createTaskSchema);

  const defaultValues = {
    title: "",
    details: ""
  };

  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue
  } = useForm({ defaultValues, resolver, mode: "all" });

  const sendMessage = (data) => {
    console.log(data);
    dispatch(
      showModal({
        name: "successNotification",
        modalData: {
          title: "Task created successfully",
          image: successImage
        }
      })
    );
  };

  const handleOpenSideBar = (open, category) => {
    setOpenSideBar({ open, category });
  };

  const handleSearchInput = (e) => {
    console.log(e.target.value);
  };

  const handleSelectedFilterItem = (item) => {
    console.log(item);
  };

  const handleCloseSidebar = () => {
    setOpenSideBar({ open: false, category: "" });
  };

  const getListComponents = (data) => {
    let listItems = data.map((item, index) => {
      return {
        component: <PersonelComponent key={index} data={item} />,
        id: item.id
      };
    });

    let headerComponent = (
      <FilterAndSearch
        closeSideBar={handleCloseSidebar}
        dropdownItems={[
          { name: "All", id: 1 },
          { name: "Mentors", id: 2 },
          { name: "Mentor Managers", id: 3 }
        ]}
        searchData={handleSearchInput}
        selectedFilterItem={handleSelectedFilterItem}
      />
    );

    return {
      listItems,
      headerComponent
    };
  };

  const handleSelectedItem = (item) => {
    console.log(item);
  };

  return (
    <div className={cx(styles.createTaskContainer, "flexRow")}>
      <div className={cx(styles.mainSection, "flexCol")}>
        <div className={cx(styles.heading, "flexRow")}>
          <h3 className={cx(styles.title)}>Add Task</h3>
        </div>

        <div className={cx(styles.formWrapper, "flexCol")}>
          <form onSubmit={handleSubmit((data) => sendMessage(data))}>
            <label htmlFor='title'>Title</label>
            <Controller
              name='title'
              control={control}
              render={({ field }) => (
                <InputField
                  {...field}
                  label={""}
                  placeholder='Enter a title'
                  type='text'
                  error={errors?.title && errors?.title?.message}
                />
              )}
            />

            <label htmlFor='details'>Details</label>
            <Controller
              name='details'
              control={control}
              render={({ field }) => (
                <TextArea
                  {...field}
                  placeholder={"Enter task details"}
                  label={""}
                  minHeight='150px'
                  error={errors?.details && errors?.details?.message}
                />
              )}
            />

            <div className={cx(styles.selectionDiv, "flexRow-space-between")}>
              <div className={cx(styles.wrapper, "flexRow-align-center")}>
                <div className={cx(styles.leftSide, "flexCol")}>
                  <h6 className={cx(styles.title)}>Add Mentor Manager</h6>
                  <div className={cx(styles.statsDiv, "flexRow")}>
                    <span className={cx(styles.stats)}>10 selected</span>
                    <ClearListIcon />
                  </div>
                </div>
                <Button
                  title='Select'
                  size='small'
                  onClick={() => handleOpenSideBar(true, "mentor-manager")}
                />
              </div>

              <div className={cx(styles.wrapper, "flexRow-align-center")}>
                <div className={cx(styles.leftSide, "flexCol")}>
                  <h6 className={cx(styles.title)}>Add Mentor</h6>
                  <div className={cx(styles.statsDiv, "flexRow")}>
                    <span className={cx(styles.stats)}>5 selected</span>
                    <ClearListIcon />
                  </div>
                </div>
                <Button
                  title='Select'
                  size='small'
                  onClick={() => handleOpenSideBar(true, "mentor")}
                />
              </div>
            </div>

            <div className={cx(styles.submitBtnDiv, "flexRow")}>
              <Button
                onClick={handleSubmit((data) => sendMessage(data))}
                // loading={loading}
                // disabled={loading}
                title='Create Task'
                type='primary'
              />
            </div>
          </form>
        </div>
      </div>

      {openSideBar.open && openSideBar.category === "mentor-manager" ? (
        <div className={cx(styles.sideBarSection)}>
          <SelectionSideBar
            selectedMenuItem={handleSelectedItem}
            data={getListComponents(mentorManagersArray)}
          />
        </div>
      ) : openSideBar.open && openSideBar.category === "mentor" ? (
        <div className={cx(styles.sideBarSection)}>
          <SelectionSideBar
            selectedMenuItem={handleSelectedItem}
            data={getListComponents(mentorsArray)}
          />
        </div>
      ) : null}

      {displayModal && modalName === "successNotification" ? (
        <SuccessNotificationModal show size='md' />
      ) : null}
    </div>
  );
};

export default CreateTask;
