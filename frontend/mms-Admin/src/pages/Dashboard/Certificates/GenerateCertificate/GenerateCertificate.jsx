import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import cx from "classnames";
import { useForm } from "react-hook-form";
import styles from "./GenerateCertificate.module.scss";

import Button from "@/components/Button/Button";
import SelectionSideBar from "@/components/SelectionSideBar/SelectionSideBar";
import closeIcon from "@/assets/icons/undo-icon.svg";
import closeIconAlt from "@/assets/icons/close-icon.svg";
import Search from "@/components/Search/Search";
import Filter from "@/components/Filter/Filter";
import SuccessNotificationModal from "@/components/Modals/SuccessNotification/SuccessNotification";

import { showModal } from "@/redux/Modal/ModalSlice";
import successImage from "@/assets/images/create-task-success-image.svg";
import PersonelComponent from "./PersonelComponent/PersonelComponent";
import ProgramListItem from "./ProgramListItem/ProgramListItem";

import beneficiaryImage from "@/assets/images/sample-profile-image.svg";
import previewImage from "@/assets/images/certificate-full.png";
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
  const [beneficiary, setBeneficiary] = useState(null);
  const [program, setProgram] = useState(null);

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
      icon: programImage,
      previewImage: previewImage
    },
    {
      id: 2,
      name: "Google Africa Scholarship",
      icon: programImage,
      previewImage: previewImage
    },
    {
      id: 3,
      name: "Google Africa Scholarship",
      icon: programImage,
      previewImage: previewImage
    },
    {
      id: 4,
      name: "Google Africa Scholarship",
      icon: programImage,
      previewImage: previewImage
    },
    {
      id: 5,
      name: "Google Africa Scholarship",
      icon: programImage,
      previewImage: previewImage
    },
    {
      id: 6,
      name: "Google Africa Scholarship",
      icon: programImage,
      previewImage: previewImage
    },
    {
      id: 7,
      name: "Google Africa Scholarship",
      icon: programImage,
      previewImage: previewImage
    },
    {
      id: 8,
      name: "Google Africa Scholarship",
      icon: programImage,
      previewImage: previewImage
    },
    {
      id: 9,
      name: "Google Africa Scholarship",
      icon: programImage,
      previewImage: previewImage
    },
    {
      id: 10,
      name: "Google Africa Scholarship",
      designation: "Program Assistant, Andela, He/Him",
      icon: programImage,
      previewImage: previewImage
    }
  ];

  const {
    handleSubmit,
    formState: { errors }
  } = useForm({ mode: "all" });

  console.log(errors, "erros");

  const handleGenerateCertificate = async () => {
    console.log(beneficiary, "beneficiary data");
    console.log(program, "program data");

    // let response = await dispatch(generateCertificate({ beneficiary, program }));
    // if (response?.success) {
    // dispatch(
    //   showModal({
    //     name: "successNotification",
    //     modalData: {
    //       title: "Program Created Successfully!",
    //       image: successImage,
    //       redirectUrl: "/dashboard/programs"
    //     }
    //   })
    // );
    // }

    dispatch(
      showModal({
        name: "successNotification",
        modalData: {
          title: "Certificate Generated Successfully!",
          image: successImage,
          redirectUrl: "/dashboard/certificates"
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

  const handleProgramListClick = (data) => {
    console.log(data);
    setProgram(data);
    setOpenSideBar({ open: false });
  };

  const handleBeneficiaryListClick = (data) => {
    console.log(data);
    setBeneficiary(data);
    setOpenSideBar({ open: false });
  };

  const getListComponents = (data, type) => {
    const beneficiariesListItems = data.map((item, index) => {
      return {
        component: <PersonelComponent key={index} data={item} onClick={handleBeneficiaryListClick} />,
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
          <form onSubmit={handleSubmit(() => handleGenerateCertificate())}>
            <div className={cx(styles.headerWrapper, "flexCol")}>
              {beneficiary ? (
                <div className={cx(styles.beneficiaryDiv)}>
                  <div className={cx(styles.imageDiv, "flexRow")}>
                    <img className={cx(styles.avatar)} src={beneficiary?.image} alt='user-image' />
                  </div>
                  <div className={cx(styles.userInfo, "flexRow")}>
                    <div className={cx(styles.leftSection)}>
                      <div className={cx(styles.groupOne, "flexCol")}>
                        <h5 className={cx(styles.name)}>{beneficiary?.name}</h5>
                        <p className={cx(styles.designation)}>{beneficiary?.designation}</p>
                      </div>

                      <div className={cx(styles.positionTags, "flexRow")}>
                        {beneficiary?.positionTags &&
                          beneficiary?.positionTags.map((tag, index) => (
                            <span key={index} className={cx(styles.tag)}>
                              {tag}
                            </span>
                          ))}
                      </div>
                    </div>

                    <div className={cx(styles.btnGroup, "flexCol")}>
                      <img src={closeIconAlt} alt='close-icon' onClick={() => setBeneficiary(null)} />
                    </div>
                  </div>
                </div>
              ) : (
                <div className={cx(styles.selectionWrapper, "flexRow-align-center")}>
                  <p className={cx(styles.title)}>Select a Beneficiary</p>
                  <Button title='Select' size='small' onClick={(e) => handleOpenSideBar(e, true, "beneficiaries")} />
                </div>
              )}
              {program ? (
                <div className={cx(styles.programDiv, "flexRow-align-center")}>
                  <div className={cx(styles.imageDiv, "flexRow")}>
                    <img className={cx(styles.avatar)} src={program?.icon} alt='user-image' />
                  </div>
                  <div className={cx(styles.programInfo, "flexRow-space-between")}>
                    <p className={cx(styles.title)}>{program?.name}</p>
                    <img src={closeIconAlt} alt='close-icon' onClick={() => setProgram(null)} />
                  </div>
                </div>
              ) : (
                <div className={cx(styles.selectionWrapper, "flexRow-align-center")}>
                  <p className={cx(styles.title)}>Select a Program</p>
                  <Button title='Select' size='small' onClick={(e) => handleOpenSideBar(e, true, "programs")} />
                </div>
              )}
            </div>

            <div className={cx(styles.previewDiv, "flexRow-fully-centered")}>
              {program?.previewImage ? <img src={program?.previewImage} alt='preview-image' /> : "Preview Image"}
            </div>

            <div className={cx(styles.submitBtnDiv, "flexRow")}>
              <Button
                onClick={handleSubmit(() => handleGenerateCertificate())}
                // loading={loading}
                disabled={!(beneficiary && program)}
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
