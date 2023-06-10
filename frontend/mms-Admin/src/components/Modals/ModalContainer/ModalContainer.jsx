import React from "react";
import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";
import "./ModalContainer.scss";

function ModalContainer({ children, show, size = "md" }) {
  return (
    <div className=''>
      <Modal show={show} scrollable centered size={size} dialogClassName='generic-modal-wrapper'>
        <Modal.Body className='generic-modal-body'>{children}</Modal.Body>
      </Modal>
    </div>
  );
}

ModalContainer.propTypes = {
  children: PropTypes.node.isRequired,
  show: PropTypes.bool,
  size: PropTypes.string
};

export default ModalContainer;
