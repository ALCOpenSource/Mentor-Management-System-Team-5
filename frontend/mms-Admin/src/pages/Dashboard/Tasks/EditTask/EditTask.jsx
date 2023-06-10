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
import Filter from "@/components/Filter/Filter";
import SuccessNotificationModal from "@/components/Modals/SuccessNotification/SuccessNotification";
// import { showModal } from "@/redux/Modal/ModalSlice";
// import successImage from "@/assets/images/create-task-success-image.svg";
import { useForm, Controller } from "react-hook-form";
import { editTaskSchema } from "@/helpers/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import PersonelComponent from "@/pages/Dashboard/Tasks/PersonelComponent/PersonelComponent";
import mentorManagerImage from "@/assets/images/mentor-manager-thumbnail.svg";
import mentorImage from "@/assets/images/sample-profile-image.svg";
import { getTaskDetails, editTask } from "@/redux/Tasks/TasksSlice";
import { useParams } from "react-router-dom";

const EditTask = () => {
  const params = useParams();
  const taskId = params.id;

  const [openSideBar, setOpenSideBar] = useState({
    open: false,
    category: ""
  });
  const [collapseInput, setCollapseInput] = useState(true);
  const [closeSelectElement, setCloseSelectElement] = useState(false);

  const dispatch = useDispatch();
  const displayModal = useSelector((state) => state.modal.show);
  const modalName = useSelector((state) => state.modal.modalName);
  const taskDetails = useSelector((state) => state.tasks.getTaskDetailsData);
  console.log(taskDetails, "task details");

  useEffect(() => {
    dispatch(getTaskDetails(taskId));
  }, [dispatch, taskId]);

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
    },
    {
      id: 10,
      name: "Kabiru Omo Isaka",
      designation: "Program Assistant, Andela, He/Him",
      image: mentorImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    }
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
      description: taskDetails?.description,
      mentors: taskDetails?.mentors,
      managers: taskDetails?.managers
    });
  }, [reset, taskDetails]);

  const handleEditTask = async (data) => {
    console.log(data);
    let payload = {
      ...data,
      managers: [
        {
          mentorManagerId: "1"
        }
      ],
      mentors: [
        {
          programMentorId: "1"
        }
      ]
    };

    const response = await dispatch(editTask(payload));
    console.log(response, "response");

    // dispatch(
    //   showModal({
    //     name: "successNotification",
    //     modalData: {
    //       title: "Task updated successfully",
    //       image: successImage
    //     }
    //   })
    // );
  };

  const handleOpenSideBar = (e, open, category) => {
    e.preventDefault();
    setOpenSideBar({ open, category });
  };

  const handleSearchInput = (e) => {
    console.log(e.target.value);
  };

  const handleSelectedFilterItem = (item) => {
    console.log(item);
  };

  const handleCloseSearchInput = (e) => {
    console.log(e, "handle close input");
    setCollapseInput(true);
  };

  const handleCloseSelectElement = (e) => {
    console.log(e, "handle close select");
    setCloseSelectElement(true);
  };

  const getListComponents = (data) => {
    let listItems = data.map((item, index) => {
      return {
        component: <PersonelComponent key={index} data={item} />,
        id: item.id
      };
    });

    let headerComponent = (
      <div className={cx(styles.filterAndSearchDiv, "flexRow-align-center")}>
        <div className={cx(styles.searchWrapper)}>
          <Search
            inputPlaceholder='Search for mentor...'
            onChange={handleSearchInput}
            collapseInput={collapseInput}
            setCollapseInput={setCollapseInput}
            closeSelectElement={handleCloseSelectElement}
          />
        </div>
        <Filter
          dropdownItems={[
            { name: "All", id: 1 },
            { name: "Mentors", id: 2 },
            { name: "Mentor Managers", id: 3 }
          ]}
          selectedFilterItem={handleSelectedFilterItem}
          closeSearchInput={handleCloseSearchInput}
          closeSelectElement={closeSelectElement}
          setCloseSelectElement={setCloseSelectElement}
        />
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

  const handleSelectedItem = (item) => {
    console.log(item);
  };

  return (
    <div className={cx(styles.editTaskContainer, "flexRow")}>
      <div className={cx(styles.mainSection, "flexCol")}>
        <div className={cx(styles.heading, "flexRow")}>
          <h3 className={cx(styles.title)}>Edit Task</h3>
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
                    <span className={cx(styles.stats)}>10 selected</span>
                    <ClearListIcon />
                  </div>
                </div>
                <Button title='Select' size='small' onClick={(e) => handleOpenSideBar(e, true, "mentor-manager")} />
              </div>

              <div className={cx(styles.wrapper, "flexRow-align-center")}>
                <div className={cx(styles.leftSide, "flexCol")}>
                  <h6 className={cx(styles.title)}>Add Mentor</h6>
                  <div className={cx(styles.statsDiv, "flexRow")}>
                    <span className={cx(styles.stats)}>5 selected</span>
                    <ClearListIcon />
                  </div>
                </div>
                <Button title='Select' size='small' onClick={(e) => handleOpenSideBar(e, true, "mentor")} />
              </div>
            </div>

            <div className={cx(styles.submitBtnDiv, "flexRow")}>
              <Button
                onClick={handleSubmit((data) => handleEditTask(data))}
                // loading={loading}
                // disabled={loading}
                title='Update Task'
                type='primary'
              />
            </div>
          </form>
        </div>
      </div>

      {openSideBar.open && openSideBar.category === "mentor-manager" ? (
        <div className={cx(styles.sideBarSection)}>
          <SelectionSideBar selectedMenuItem={handleSelectedItem} data={getListComponents(mentorManagersArray)} />
        </div>
      ) : openSideBar.open && openSideBar.category === "mentor" ? (
        <div className={cx(styles.sideBarSection)}>
          <SelectionSideBar selectedMenuItem={handleSelectedItem} data={getListComponents(mentorsArray)} />
        </div>
      ) : null}

      {displayModal && modalName === "successNotification" ? <SuccessNotificationModal show size='md' /> : null}
    </div>
  );
};

export default EditTask;
