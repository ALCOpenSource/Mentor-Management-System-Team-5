import React from "react";
import cx from "classnames";

import { Container, Row } from "react-bootstrap";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileDetail from "./ProfileDetail/ProfileDetail";
import styles from "./Profile.module.scss";

function Profile() {
  return (
    <Container className={cx(styles.profileContainer)}>
      <Row className='mb-5'>
        <ProfileHeader />
      </Row>
      <Row>
        <ProfileDetail />
      </Row>
    </Container>
  );
}

export default Profile;
