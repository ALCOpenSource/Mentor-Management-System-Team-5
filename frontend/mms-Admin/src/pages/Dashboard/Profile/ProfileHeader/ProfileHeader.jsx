import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import cx from "classnames";
import Button from "@/components/Button/Button";
import styles from "./Profile.header.module.scss";
import PropTypes from "prop-types";
import { initialsCase } from "@/helpers/textTransform";

function ProfileHeader({ data }) {
  const { profilePicture, flagUrl, fullName, role } = data;

  return (
    <Container className={cx(styles.profileHeaderContainer)}>
      <Row>
        <Col className='d-flex justify-content-start ps-0'>
          <Container className='ps-0'>
            <Row className={cx(styles.bioDataDiv, "align-items-center")}>
              <Col md='auto'>
                {profilePicture ? (
                  <img className={cx(styles.profileImage)} src={profilePicture} alt='profile-image' />
                ) : (
                  <span className={cx(styles.profileImageText)}>{initialsCase(fullName)}</span>
                )}
              </Col>
              <Col className='ps-0'>
                <Row className='align-items-center justify-content-start' style={{ flexWrap: "nowrap", gap: "0.5rem" }}>
                  <h1 className={cx(styles.userName, "m-0")}>{fullName}</h1>
                  <div className={cx(styles.flagImageDiv)}>
                    <img className={cx(styles.flagImage)} src={flagUrl} alt='flag-icon' />
                  </div>
                </Row>
                <Row>
                  <h1 className={cx(styles.userRole, "m-0 p-0")}>{role}</h1>
                </Row>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col className='d-flex justify-content-end align-items-center pe-0'>
          <Link to='/dashboard/settings'>
            <Button title='Edit Profile' />
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

ProfileHeader.propTypes = {
  data: PropTypes.object,
  profilePicture: PropTypes.string,
  fullName: PropTypes.string,
  role: PropTypes.string
};

export default ProfileHeader;
