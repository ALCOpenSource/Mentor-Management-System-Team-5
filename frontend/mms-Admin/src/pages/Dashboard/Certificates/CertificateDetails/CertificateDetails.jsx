import React from "react";
import { useSelector, useDispatch } from "react-redux";
import cx from "classnames";
import styles from "./CertificateDetails.module.scss";
import { useParams } from "react-router-dom";
import Button from "@/components/Button/Button";
import certificateImage from "@/assets/images/certificate-full.png";
import approvedSuccessImage from "@/assets/images/approved.svg";
import declinedSuccessImage from "@/assets/images/declined.svg";
import SuccessNotificationModal from "@/components/Modals/SuccessNotification/SuccessNotification";
import { showModal } from "@/redux/Modal/ModalSlice";

function CertificateDetails() {
  const dispatch = useDispatch();
  const params = useParams();
  const taskId = params.id;

  const certificateDetails = {
    id: taskId,
    title: `GADS CLOUD 2022 - COMPLETION - ${taskId}`,
    name: "Alison Davis",
    previewImage: certificateImage
  };

  const displayModal = useSelector((state) => state.modal.show);
  const modalName = useSelector((state) => state.modal.modalName);

  const handleApproval = (type) => {
    dispatch(
      showModal({
        name: "successNotification",
        modalData: {
          title: `Certificate ${type === "approve" ? "Approved" : "Declined"}`,
          image: type === "approve" ? approvedSuccessImage : declinedSuccessImage
        }
      })
    );
  };

  return (
    <div className={cx(styles.certificateDetailsContainer, "flexCol")}>
      {taskId && (
        <>
          <div className={cx(styles.certificateDiv, "flexRow")}>
            <img src={certificateDetails?.previewImage} alt='certificate' />
          </div>

          <div className={cx(styles.btnGroup, "flexRow-align-center")}>
            <Button onClick={() => handleApproval("decline")} title='Decline' type='secondary' />
            <Button onClick={() => handleApproval("approve")} title='Approve' />
          </div>
        </>
      )}

      {displayModal && modalName === "successNotification" ? <SuccessNotificationModal show size='md' /> : null}
    </div>
  );
}

export default CertificateDetails;
