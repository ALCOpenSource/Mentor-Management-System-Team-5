import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import cx from "classnames";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./CreateReport.module.scss";
import Button from "@/components/Button/Button";
import SelectionSideBar from "@/components/SelectionSideBar/SelectionSideBar";
import InputField from "@/components/Input/Input";
import TextArea from "@/components/TextArea/TextArea";
import Search from "@/components/Search/Search";
import Filter from "@/components/Filter/Filter";
import closeIcon from "@/assets/icons/undo-icon.svg";
import SuccessNotificationModal from "@/components/Modals/SuccessNotification/SuccessNotification";
import { showModal } from "@/redux/Modal/ModalSlice";
import { createReportSchema } from "@/helpers/validation";
import ProgramListItem from "./ProgramListItem/ProgramListItem";
import mentorImage from "@/assets/images/reports-program-thumbnail.svg";
import successImage from "@/assets/images/default-success-notification-image.png";
import closeIconAlt from "@/assets/icons/close-icon.svg";
import { useNavigate } from "react-router-dom";

function CreateReport() {
  const navigate = useNavigate();
  const [openSideBar, setOpenSideBar] = useState({
    open: false,
    category: ""
  });
  const [collapseInput, setCollapseInput] = useState(true);
  const [closeSelectElement, setCloseSelectElement] = useState(false);

  const dispatch = useDispatch();
  const displayModal = useSelector((state) => state.modal.show);
  const modalName = useSelector((state) => state.modal.modalName);

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

  const resolver = yupResolver(createReportSchema);

  const defaultValues = {
    title: "",
    blockers: "",
    achievements: "",
    recommendations: ""
  };

  const {
    handleSubmit,
    formState: { errors },
    control
  } = useForm({ defaultValues, resolver, mode: "all" });

  const sendMessage = (data) => {
    console.log(data);
    dispatch(
      showModal({
        name: "successNotification",
        modalData: {
          title: "Report submitted successfully",
          image: successImage
        }
      })
    );
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
    const listItems = data.map((item, index) => {
      return {
        component: <ProgramListItem key={index} data={item} />,
        id: item.id
      };
    });

    const headerComponent = (
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
    <div className={cx(styles.createReportContainer, "flexRow")}>
      <div className={cx(styles.mainSection, "flexCol")}>
        <div className={cx(styles.heading, "flexCol")}>
          <div className={cx(styles.header, "flexRow-space-between")}>
            <h3 className={cx(styles.title)}>Compose Report</h3>
            <img onClick={() => navigate(-1)} src={closeIconAlt} alt='close-icon' />
          </div>

          <div className={cx(styles.selectionDiv, "flexRow-space-between")}>
            <select className={cx(styles.reportTypeSelector)} name='reportType' id='reportType'>
              <option value='daily'>Daily</option>
              <option value='weekly'>Weekly</option>
              <option value='monthly'>Monthly</option>
            </select>

            <div className={cx(styles.wrapper, "flexRow-align-center")}>
              <Button title='Select Program' type='secondary' onClick={(e) => handleOpenSideBar(e, true, "program")} />
            </div>
          </div>
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
                  placeholder='Enter a title'
                  type='text'
                  error={errors?.title && errors?.title?.message}
                />
              )}
            />

            <label htmlFor='achievements'>Major Achievements</label>
            <Controller
              name='achievements'
              control={control}
              render={({ field }) => (
                <TextArea
                  {...field}
                  placeholder='Enter details'
                  minHeight='150px'
                  error={errors?.achievements && errors?.achievements?.message}
                />
              )}
            />

            <label htmlFor='blockers'>Major Blockers</label>
            <Controller
              name='blockers'
              control={control}
              render={({ field }) => (
                <TextArea
                  {...field}
                  placeholder='Enter details'
                  minHeight='150px'
                  error={errors?.blockers && errors?.blockers?.message}
                />
              )}
            />

            <label htmlFor='recommendations'>Major Recommendations</label>
            <Controller
              name='recommendations'
              control={control}
              render={({ field }) => (
                <TextArea
                  {...field}
                  placeholder='Enter task recommendations'
                  minHeight='150px'
                  error={errors?.recommendations && errors?.recommendations?.message}
                />
              )}
            />

            <div className={cx(styles.submitBtnDiv, "flexRow")}>
              <Button
                onClick={handleSubmit((data) => sendMessage(data))}
                // loading={loading}
                // disabled={loading}
                title='Submit Report'
                type='primary'
              />
            </div>
          </form>
        </div>
      </div>

      {openSideBar.open && openSideBar.category === "program" ? (
        <div className={cx(styles.sideBarSection)}>
          <SelectionSideBar selectedMenuItem={handleSelectedItem} data={getListComponents(mentorsArray)} />
        </div>
      ) : null}

      {displayModal && modalName === "successNotification" ? <SuccessNotificationModal show size='md' /> : null}
    </div>
  );
}

export default CreateReport;
