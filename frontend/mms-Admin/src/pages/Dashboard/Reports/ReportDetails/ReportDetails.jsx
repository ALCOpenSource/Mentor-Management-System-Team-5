import React from "react";
import cx from "classnames";
import { useSelector, useDispatch } from "react-redux";
import styles from "./ReportDetails.module.scss";
import reportIcon from "@/assets/icons/reports-overview-card-icon.svg";
import closeIcon from "@/assets/icons/close-icon.svg";
import { useParams, useNavigate } from "react-router-dom";
import Button from "@/components/Button/Button";

import ShareReportModal from "@/components/Modals/ShareReport/ShareReport";
import SuccessNotificationModal from "@/components/Modals/SuccessNotification/SuccessNotification";
import { showModal } from "@/redux/Modal/ModalSlice";

const ReportDetails = () => {
  
  const dispatch = useDispatch();
  const params = useParams();
  const reportId = params.id;
  const navigate = useNavigate();

  const displayModal = useSelector((state) => state.modal.show);
  const modalName = useSelector((state) => state.modal.modalName);

  const authorMetaData = {
    id: reportId,
      title: `Google Africa Scholarship ${reportId}`,
      author: "Ibrahim Kabir",
      date: "19th - 25th Oct 23"
  };

  const reportDetailsObj = {
    achievements: {
      title: "Major Achievements",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. "
    },
    blockers: {
      title: "Major Blockers",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. "
    },
    recommendations: {
      title: "Major Recommendations",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. "
    }
  };

  const handleCloseReport = () => {
    navigate("/dashboard/reports/");
    // window.history.pushState(null, "", "/dashboard/reports");
  };

  const handleShareReport = () => {
    dispatch(showModal({ name: "shareReport", modalData: "Share report via email" }));
  };

  const handleDownloadReport= () => {
    dispatch(showModal({ name: "successNotification", modalData: {
      title: "Report downloaded successfully"
    } }));
  };

  return (
    <div className={cx(styles.reportDetailsContainer, "flexCol")}>
      <div className={cx(styles.heading, "flexRow-space-between")}>

      <div className={cx(styles.body, "flexRow-align-center")}>
        <img className={cx(styles.icon)} src={reportIcon} alt='icon' />
        <div className={cx(styles.mainContent, "flexCol")}>
          <h5 className={cx(styles.title)}>{authorMetaData?.title}</h5>
          <div className={cx(styles.metaData, "flexRow-align-center")}>
            <span className={cx(styles.name)}>By {authorMetaData?.author}</span>-
            <span className={cx(styles.date)}>{authorMetaData?.date}</span>
          </div>
        </div>
      </div>

      <img onClick={()=> handleCloseReport()} src={closeIcon} alt="close-icon" />

        </div>

<div className={cx(styles.mainBody, "flexCol")}>
  {
    Object.keys(reportDetailsObj).map((key, index) => {
      return (
        <div key={index} className={cx(styles.reportDetails, "flexCol")}>
          <h5 className={cx(styles.title)}>{reportDetailsObj[key].title}</h5>
          <p className={cx(styles.content)}>{reportDetailsObj[key].content}</p>
        </div>
      );
    }
    )
  }

  <div className={cx(styles.btnGroup, "flexRow-space-between")}>
    <Button onClick={()=> handleShareReport()} title="Share" type="secondary" />
    <Button onClick={()=> handleDownloadReport()} title="Download" />
  </div>
</div>

{displayModal && modalName === "shareReport" ? <ShareReportModal show size='md' /> : null}
{displayModal && modalName === "successNotification" ? <SuccessNotificationModal show size='md' /> : null}
        
      </div>
  );
};

export default ReportDetails;