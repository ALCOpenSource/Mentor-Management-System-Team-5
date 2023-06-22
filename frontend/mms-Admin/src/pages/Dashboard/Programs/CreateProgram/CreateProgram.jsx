import React, { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import cx from "classnames";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./CreateProgram.module.scss";
import Button from "@/components/Button/Button";
import { ReactComponent as ClearListIcon } from "@/assets/icons/clear-list-icon.svg";
import SelectionSideBar from "@/components/SelectionSideBar/SelectionSideBar";
import closeIcon from "@/assets/icons/undo-icon.svg";
import closeIconAlt from "@/assets/icons/close-icon.svg";
import InputField from "@/components/Input/Input";
import TextArea from "@/components/TextArea/TextArea";
import Search from "@/components/Search/Search";
// import Filter from "@/components/Filter/Filter";
import SuccessNotificationModal from "@/components/Modals/SuccessNotification/SuccessNotification";

import { showModal } from "@/redux/Modal/ModalSlice";
import successImage from "@/assets/images/create-task-success-image.svg";
import { createProgramSchema } from "@/helpers/validation";
import PersonelComponent from "./PersonelComponent/PersonelComponent";
// import { getAllMentors } from "@/redux/Mentors/MentorsSlice";
// import { getAllMentorManagers } from "@/redux/MentorManagers/MentorManagersSlice";
// import programAvatar from "@/assets/images/program-avatar.svg";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";
import { createProgram } from "@/redux/Programs/ProgramsSlice";
import { getAllUserProfiles } from "@/redux/Profile/ProfileSlice";

function CreateProgram() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [openSideBar, setOpenSideBar] = useState({
    open: false,
    category: ""
  });
  const [collapseInput, setCollapseInput] = useState(true);
  const [selectedMentorManagers, setSelectedMentorManagers] = useState([]);
  const [selectedMentors, setSelectedMentors] = useState([]);
  const criteriaData = JSON.parse(localStorage.getItem("criteria")) || {};
  console.log(criteriaData, "criteria data here");

  // const [closeSelectElement, setCloseSelectElement] = useState(false);

  const displayModal = useSelector((state) => state.modal.show);
  const modalName = useSelector((state) => state.modal.modalName);
  const createProgramLoading = useSelector((state) => state.loading.createProgramLoading);
  const allUserProfilesData = useSelector((state) => state.profile.getAllUserProfilesData);
  // const allMentorsData = useSelector((state) => state.mentors.getAllMentorsData);
  // const allMentorManagersData = useSelector((state) => state.mentorManagers.getAllMentorManagersData);

  useEffect(() => {
    // dispatch(getAllMentors());
    // dispatch(getAllMentorManagers());
    dispatch(getAllUserProfiles());
  }, [dispatch]);

  const resolver = yupResolver(createProgramSchema);

  const defaultValues = {
    name: "",
    description: ""
  };

  const {
    handleSubmit,
    formState: { errors },
    control
  } = useForm({ defaultValues, resolver, mode: "all" });

  const handleCreateProgram = async (data) => {
    console.log(data);
    let formattedMentorManagerIds = selectedMentorManagers.map((id) => {
      return { mentorManagerId: id };
    });
    let formattedMentorIds = selectedMentors.map((id) => {
      return { programsMentorId: id };
    });
    let payload = {
      ...data,
      programmePicture: uploadedFile?.imagePreviewUrl || "",
      status: 1, // this will be replaced later - it ought to be done at the backend
      criteria: JSON.stringify(localStorage.getItem("criteria")) || "",
      managers: formattedMentorManagerIds,
      mentors: formattedMentorIds
    };
    const response = await dispatch(createProgram(payload));
    if (response.success) {
      dispatch(
        showModal({
          name: "successNotification",
          modalData: {
            title: "Program Created Successfully!",
            image: successImage,
            redirectUrl: "/dashboard/programs"
          }
        })
      );
      localStorage.removeItem("criteria");
    }
  };

  const handleOpenSideBar = (e, open, category) => {
    e.preventDefault();
    setOpenSideBar({ open, category });
  };

  const handleSearchInput = (e) => {
    console.log(e.target.value);
  };

  // const handleSelectedFilterItem = (item) => {
  //   console.log(item);
  // };

  // const handleCloseSearchInput = (e) => {
  //   console.log(e, "handle close input");
  //   setCollapseInput(true);
  // };

  const handleCloseSelectElement = () => {
    // Added to prevent console errors
  };

  const getListComponents = (data, selectedUsers) => {
    const listItems =
      Array.isArray(data) &&
      data.map((item, index) => {
        return {
          component: (
            <PersonelComponent
              key={index}
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
        <div className={cx(styles.searchWrapper)}>
          <Search
            inputPlaceholder={openSideBar?.category === "mentor-manager" ? "Search for Mentor Manager" : "Search for Mentor"}
            onChange={handleSearchInput}
            collapseInput={collapseInput}
            setCollapseInput={setCollapseInput}
            closeSelectElement={handleCloseSelectElement}
          />
        </div>
        {/* <Filter
          dropdownItems={[
            { name: "All", id: 1 },
            { name: "Mentors", id: 2 },
            { name: "Mentor Managers", id: 3 }
          ]}
          selectedFilterItem={handleSelectedFilterItem}
          closeSearchInput={handleCloseSearchInput}
          closeSelectElement={closeSelectElement}
          setCloseSelectElement={setCloseSelectElement}
        /> */}
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

  const [uploadedFile, setUploadedFile] = useState({
    file: "",
    imagePreviewUrl: ""
  });

  const onDrop = useCallback((acceptedFiles) => {
    let file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUploadedFile({ file: file, imagePreviewUrl: reader.result });
    };
    reader.readAsDataURL(file);
  }, []);

  const { getRootProps } = useDropzone({ onDrop, accept: "image/*" });

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDropzoneClick = (e) => {
    e.preventDefault();
  };

  const handleCreateCriteria = (e) => {
    e.preventDefault();
    navigate("create-criteria");
  };

  const handleClearList = (category) => {
    if (category === "mentorManager") {
      setSelectedMentorManagers([]);
    } else if (category === "mentor") {
      setSelectedMentors([]);
    }
  };

  const handleSideBarMenuClick = () => {
    // This is added to remove the warning of unused function in the selection sidebar component
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
    <div className={cx(styles.createProgramContainer, "flexRow")}>
      <div className={cx(styles.mainSection, "flexCol")}>
        <div className={cx(styles.heading, "flexRow-space-between")}>
          <h3 className={cx(styles.title)}>Create New Program</h3>
          <img src={closeIconAlt} alt='close-icon' onClick={() => navigate("/dashboard/programs")} />
        </div>

        <div className={cx(styles.formWrapper, "flexCol")}>
          <form onSubmit={handleSubmit((data) => handleCreateProgram(data))}>
            <div className={cx(styles.headerWrapper, "flexRow")}>
              <div className={cx(styles.leftSection, styles.imageDiv)}>
                {uploadedFile?.imagePreviewUrl ? (
                  <img
                    {...getRootProps({ onDragOver: handleDragOver, onClick: handleDropzoneClick })}
                    src={uploadedFile?.imagePreviewUrl ? uploadedFile?.imagePreviewUrl : null}
                    alt='profile-image'
                  />
                ) : (
                  <span {...getRootProps({ onDragOver: handleDragOver, onClick: handleDropzoneClick })}>
                    Select Image
                  </span>
                )}
              </div>
              <div className={cx(styles.rightSection, "flexCol")}>
                <h5 className={cx(styles.title)}>Set Program Avatar</h5>
                <Button
                  {...getRootProps({ onDragOver: handleDragOver, onClick: handleDropzoneClick })}
                  title='Select file'
                  size='small'
                  type='secondary'
                />
              </div>
            </div>

            <label htmlFor='name'>Program Name</label>
            <Controller
              name='name'
              control={control}
              render={({ field }) => (
                <InputField
                  {...field}
                  placeholder='Enter program name'
                  type='text'
                  error={errors?.name && errors?.name?.message}
                />
              )}
            />

            <label htmlFor='description'>Program Description</label>
            <Controller
              name='description'
              control={control}
              render={({ field }) => (
                <TextArea
                  {...field}
                  placeholder='Enter description'
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
                    <span className={cx(styles.stats)}>{selectedMentorManagers.length} selected</span>
                    <ClearListIcon onClick={() => handleClearList("mentorManager")} />
                  </div>
                </div>
                <Button title='Select' size='small' onClick={(e) => handleOpenSideBar(e, true, "mentor-manager")} />
              </div>

              <div className={cx(styles.wrapper, "flexRow-align-center")}>
                <div className={cx(styles.leftSide, "flexCol")}>
                  <h6 className={cx(styles.title)}>Add Mentor</h6>
                  <div className={cx(styles.statsDiv, "flexRow")}>
                    <span className={cx(styles.stats)}>{selectedMentors.length} selected</span>
                    <ClearListIcon onClick={() => handleClearList("mentor")} />
                  </div>
                </div>
                <Button title='Select' size='small' onClick={(e) => handleOpenSideBar(e, true, "mentor")} />
              </div>

              <div className={cx(styles.wrapper, "flexRow-align-center")}>
                <div className={cx(styles.leftSide, "flexCol")}>
                  <h6 className={cx(styles.title)}>Set Criteria</h6>
                  <div className={cx(styles.statsDiv, "flexRow")}>
                    <span className={cx(styles.stats)}>
                      {criteriaData && Object.keys(criteriaData).length} selected
                    </span>
                    <ClearListIcon />
                  </div>
                </div>
                <Button title='Select' size='small' onClick={(e) => handleCreateCriteria(e)} />
              </div>
            </div>

            <div className={cx(styles.submitBtnDiv, "flexRow")}>
              <Button
                onClick={handleSubmit((data) => handleCreateProgram(data))}
                loading={createProgramLoading}
                disabled={createProgramLoading}
                title='Create Program'
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
}

export default CreateProgram;
