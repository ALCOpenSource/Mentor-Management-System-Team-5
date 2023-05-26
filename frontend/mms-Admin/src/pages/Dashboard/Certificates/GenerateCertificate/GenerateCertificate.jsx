import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import cx from "classnames";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./GenerateCertificate.module.scss";

import Button from "@/components/Button/Button";
import { ReactComponent as ClearListIcon } from "@/assets/icons/clear-list-icon.svg";
import SelectionSideBar from "@/components/SelectionSideBar/SelectionSideBar";
import closeIcon from "@/assets/icons/undo-icon.svg";
import closeIconAlt from "@/assets/icons/close-icon.svg";
import Search from "@/components/Search/Search";
import Filter from "@/components/Filter/Filter";
import SuccessNotificationModal from "@/components/Modals/SuccessNotification/SuccessNotification";

import { showModal } from "@/redux/Modal/ModalSlice";
import successImage from "@/assets/images/create-task-success-image.svg";
import { createProgramSchema } from "@/helpers/validation";
import PersonelComponent from "@/pages/Dashboard/Tasks/PersonelComponent/PersonelComponent";
import ProgramListItem from "./ProgramListItem/ProgramListItem";

import beneficiaryImage from "@/assets/images/sample-profile-image.svg";
import programImage from "@/assets/images/program-avatar.svg";
import { useNavigate } from "react-router-dom";

const GenerateCertificate = () => {
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

  const beneficiariesArray = [
    {
      id: 1,
      name: "Kabiru Omo Isaka",
      designation: "Program Assistant, Andela, He/Him",
      image: beneficiaryImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      id: 2,
      name: "Kabiru Omo Isaka",
      designation: "Program Assistant, Andela, He/Him",
      image: beneficiaryImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      id: 3,
      name: "Kabiru Omo Isaka",
      designation: "Program Assistant, Andela, He/Him",
      image: beneficiaryImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      id: 4,
      name: "Kabiru Omo Isaka",
      designation: "Program Assistant, Andela, He/Him",
      image: beneficiaryImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      id: 5,
      name: "Kabiru Omo Isaka",
      designation: "Program Assistant, Andela, He/Him",
      image: beneficiaryImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      id: 6,
      name: "Kabiru Omo Isaka",
      designation: "Program Assistant, Andela, He/Him",
      image: beneficiaryImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      id: 7,
      name: "Kabiru Omo Isaka",
      designation: "Program Assistant, Andela, He/Him",
      image: beneficiaryImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    }
  ];

  const programsArray = [
    {
      id: 1,
      name: "Google Africa Scholarship",
      image: programImage
    },
    {
      id: 2,
      name: "Google Africa Scholarship",
      image: programImage
    },
    {
      id: 3,
      name: "Google Africa Scholarship",
      image: programImage
    },
    {
      id: 4,
      name: "Google Africa Scholarship",
      image: programImage
    },
    {
      id: 5,
      name: "Google Africa Scholarship",
      image: programImage
    },
    {
      id: 6,
      name: "Google Africa Scholarship",
      image: programImage
    },
    {
      id: 7,
      name: "Google Africa Scholarship",
      image: programImage
    },
    {
      id: 8,
      name: "Google Africa Scholarship",
      image: programImage
    },
    {
      id: 9,
      name: "Google Africa Scholarship",
      image: programImage
    },
    {
      id: 10,
      name: "Google Africa Scholarship",
      designation: "Program Assistant, Andela, He/Him",
      image: programImage
    }
  ];

  const resolver = yupResolver(createProgramSchema);

  const defaultValues = {
    title: "",
    details: ""
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
          title: "Program Created Successfully!",
          image: successImage,
          redirectUrl: "/dashboard/programs"
        }
      })
    );
    localStorage.removeItem("criteria");
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

  const handleProgramListClick = (id) => {
    console.log(id);
  };

  const getListComponents = (data, type) => {
    const beneficiariesListItems = data.map((item, index) => {
      return {
        component: <PersonelComponent key={index} data={item} />,
        id: item.id
      };
    });

    const programsListItems = data.map((item, index) => {
      return {
        component: <ProgramListItem key={index} data={item} onClick={handleProgramListClick} />,
        id: item.id
      };
    });

    const headerComponent = (
      <div className={cx(styles.filterAndSearchDiv, "flexRow-align-center")}>
        <div className={cx(styles.searchWrapper)}>
          <Search
            inputPlaceholder={type === "beneficiaries" ? "Search Beneficiaries" : "Search Programs"}
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

    return { listItems: type === "beneficiaries" ? beneficiariesListItems : programsListItems, headerComponent };
  };

  const handleSelectedItem = (item) => {
    console.log(item);
  };

  return (
    <div className={cx(styles.generateCertificateContainer, "flexRow")}>
      <div className={cx(styles.mainSection, "flexCol")}>
        <div className={cx(styles.heading, "flexRow-space-between")}>
          <h3 className={cx(styles.title)}>Generate Certificate</h3>
          <img src={closeIconAlt} alt='close-icon' onClick={() => navigate("/dashboard/certificates")} />
        </div>

        <div className={cx(styles.formWrapper, "flexCol")}>
          <form onSubmit={handleSubmit((data) => sendMessage(data))}>
            <div className={cx(styles.headerWrapper, "flexCol")}>
              <div className={cx(styles.selectionWrapper, "flexRow-align-center")}>
                <p className={cx(styles.title)}>Select a Beneficiary</p>
                <Button title='Select' size='small' onClick={(e) => handleOpenSideBar(e, true, "beneficiaries")} />
              </div>
              <div className={cx(styles.selectionWrapper, "flexRow-align-center")}>
                <p className={cx(styles.title)}>Select a Program</p>
                <Button title='Select' size='small' onClick={(e) => handleOpenSideBar(e, true, "programs")} />
              </div>
            </div>

            <div className={cx(styles.previewDiv, "flexRow-fully-centered")}>Certificate Preview</div>

            <div className={cx(styles.submitBtnDiv, "flexRow")}>
              <Button
                onClick={handleSubmit((data) => sendMessage(data))}
                // loading={loading}
                // disabled={loading}
                title='Generate'
                type='primary'
              />
            </div>
          </form>
        </div>
      </div>

      {openSideBar.open && openSideBar.category === "beneficiaries" ? (
        <div className={cx(styles.sideBarSection)}>
          <SelectionSideBar
            selectedMenuItem={handleSelectedItem}
            data={getListComponents(beneficiariesArray, "beneficiaries")}
          />
        </div>
      ) : openSideBar.open && openSideBar.category === "programs" ? (
        <div className={cx(styles.sideBarSection)}>
          <SelectionSideBar selectedMenuItem={handleSelectedItem} data={getListComponents(programsArray, "programs")} />
        </div>
      ) : null}

      {displayModal && modalName === "successNotification" ? <SuccessNotificationModal show size='md' /> : null}
    </div>
  );
};

export default GenerateCertificate;
