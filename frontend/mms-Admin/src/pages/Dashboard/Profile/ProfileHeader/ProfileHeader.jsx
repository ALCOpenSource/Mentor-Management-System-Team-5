import React from "react";
import { Link } from "react-router-dom";
import Button from "@/components/Button/Button";
import profileImage from "@/assets/images/sample-profile-image.png";
import flagImage from "@/assets/icons/flag-01.svg";
import { Col, Container, Row } from "react-bootstrap";
import cx from "classnames";
import styles from "./Profile.header.module.scss";

const ProfileHeader = () => {
  return (
    <Container className={cx(styles.profileHeaderContainer)}>
      <Row>
        <Col className='d-flex justify-content-start ps-0'>
          <Container className='ps-0'>
            <Row className='align-items-center'>
              <Col md='auto'>
                <img src={profileImage} alt='profile image' style={{ height: "90px" }} />
              </Col>
              <Col>
                <Row className='align-items-center'>
                  <Col md='auto'>
                    <h1 className={cx(styles.userName, "m-0")}>Peculiar Umeh</h1>
                  </Col>
                  <Col>
                    <img src={flagImage} alt='flag image' />
                  </Col>
                </Row>
                <Row>
                  <h1 className={cx(styles.userRole, "m-0 p-0")}>Admin</h1>
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
};

export default ProfileHeader;
