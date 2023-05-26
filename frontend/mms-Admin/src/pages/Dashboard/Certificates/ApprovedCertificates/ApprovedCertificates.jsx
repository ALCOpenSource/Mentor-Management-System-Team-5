import React, { useState } from "react";
import cx from "classnames";
import styles from "./ApprovedCertificates.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { showModal } from "@/redux/Modal/ModalSlice";
import DeleteNotificationModal from "@/components/Modals/DeleteNotification/DeleteNotification";
import certificate from "@/assets/images/certificate-full.png";
import { ReactComponent as CertificateIcon } from "@/assets/icons/certificate-thumbnail.svg";
import { ReactComponent as TogglerIconUp } from "@/assets/icons/arrow-circle-up.svg";
import { ReactComponent as TogglerIconDown } from "@/assets/icons/arrow-circle-down.svg";
import Button from "@/components/Button/Button";
import successImage from "@/assets/images/task-delete-success.png";
import emptySelectionIcon from "@/assets/icons/empty-selection-icon.svg";

const ApprovedCertificates = () => {
  const dispatch = useDispatch();

  const displayModal = useSelector((state) => state.modal.show);
  const modalName = useSelector((state) => state.modal.modalName);

  const [toggle, setToggle] = useState({
    index: null,
    toggle: false
  });

  const cardData = [
    {
      title: "GADS CLOUD 2022 - COMPLETION",
      name: "Alison Davis",
      icon: CertificateIcon
    },
    {
      title: "GADS CLOUD 2022 - COMPLETION",
      name: "Alison Davis",
      icon: CertificateIcon
    },
    {
      title: "GADS CLOUD 2022 - COMPLETION",
      name: "Alison Davis",
      icon: CertificateIcon
    },
    {
      title: "GADS CLOUD 2022 - COMPLETION",
      name: "Alison Davis",
      icon: CertificateIcon
    },
    {
      title: "GADS CLOUD 2022 - COMPLETION",
      name: "Alison Davis",
      icon: CertificateIcon
    },
    {
      title: "GADS CLOUD 2022 - COMPLETION",
      name: "Alison Davis",
      icon: CertificateIcon
    },
    {
      title: "GADS CLOUD 2022 - COMPLETION",
      name: "Alison Davis",
      icon: CertificateIcon
    },
    {
      title: "GADS CLOUD 2022 - COMPLETION",
      name: "Alison Davis",
      icon: CertificateIcon
    }
  ];

  const handleToggle = (index) => {
    if (toggle.index === index) {
      setToggle({
        index,
        toggle: !toggle.toggle
      });
    } else {
      setToggle({
        index,
        toggle: true
      });
    }
  };

  const handleDelete = () => {
    dispatch(
      showModal({
        name: "deleteNotification",
        modalData: {
          title: "Certificate Deleted!",
          image: successImage
        }
      })
    );
  };

  return (
    <div className={cx(styles.approvedCertificatesContainer, "flexCol")}>
      <div className={cx(styles.body, "flexCol")}>
        <div className={cx(styles.cardContainer, "flexCol")}>
          {Array.isArray(cardData) && cardData.length > 0 ? (
            cardData.map((item, index) => {
              return (
                <div className={cx(styles.cardWrapper, "flexCol")} key={index}>
                  <div className={cx(styles.cardHeader, "flexRow-space-between")}>
                    <div className={cx(styles.cardIcon)}>
                      <item.icon />
                    </div>
                    <div className={cx(styles.metaData, "flexCol")}>
                      <h6 className={cx(styles.name)}>{item?.name}</h6>
                      <p className={cx(styles.metaDataTitle)}>{item.title}</p>
                    </div>
                    <div className={cx(styles.cardToggler)}>
                      {toggle?.toggle && toggle.index === index ? (
                        <TogglerIconUp onClick={() => handleToggle(index)} />
                      ) : (
                        <TogglerIconDown onClick={() => handleToggle(index)} />
                      )}
                    </div>
                  </div>

                  {toggle.index === index && toggle.toggle && (
                    <>
                      <div className={cx(styles.cardBody, "flexCol")}>
                        <div className={cx(styles.certificateDiv, "flexRow-fully-centered")}>
                          <img src={certificate} alt='certificate' />
                        </div>

                        <div className={cx(styles.btnGroup, "flexRow-align-center")}>
                          <Button type='secondary' onClick={() => handleDelete()} title='Delete' />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })
          ) : (
            <div className={cx(styles.emptySelectionDiv, "flexCol-fully-centered")}>
              <img src={emptySelectionIcon} alt='empty-selection-icon' />
              <p>No Approved Certificate</p>
            </div>
          )}
        </div>
      </div>
      {displayModal && modalName === "deleteNotification" ? <DeleteNotificationModal show size='md' /> : null}
    </div>
  );
};

export default ApprovedCertificates;
