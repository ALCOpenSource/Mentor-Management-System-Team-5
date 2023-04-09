import React from "react";
import { Modal } from "react-bootstrap";
import "./ModalContainer.scss";
import { useDispatch } from "react-redux";
import { hideModal } from "@/redux/Modal/ModalSlice";
import PropTypes from "prop-types";

const ModalContainer = ({ children, show, size = "md", modalName }) => {
  const dispatch = useDispatch();
  const handleClose = () => dispatch(hideModal({ name: modalName }));

  return (
    <>
      <div className=''>
        <Modal
          show={show}
          onHide={handleClose}
          scrollable={true}
          centered
          size={size}
          dialogClassName='generic-modal-wrapper'
        >
          <Modal.Body className='generic-modal-body'>{children}</Modal.Body>
        </Modal>
      </div>
    </>
  );
};

ModalContainer.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool,
  size: PropTypes.string,
  modalName: PropTypes.string
};

export default ModalContainer;