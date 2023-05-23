import React from "react";
import cx from "classnames";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Profile.detail.module.scss";
import PropTypes from "prop-types";

function ProfileDetail({ data }) {
  const { bio, addressInfoData, socialInfoData } = data;

  return (
    <Container className={cx(styles.profileDetailContainer, "border rounded-2")}>
      <Row className='mb-2'>
        <h2 className={cx(styles.sectionTitle, "p-0")}>About</h2>
      </Row>
      <Row>
        <p className={cx(styles.bio, "mb-3")}>{bio || "Kindly update your bio"}</p>
      </Row>

      <div className={cx(styles.addressInfoDiv, "flexCol")}>
        {Array.isArray(addressInfoData) &&
          addressInfoData.map((data) => (
            <Row key={data.id} className={cx(styles.addressInfo, "align-items-center")}>
              <Col md='auto'>
                <h6 className={cx(styles.title, "m-0")}>{data.title}</h6>
              </Col>
              <Col className='p-0'>
                <h6 className={cx(styles.info, "m-0")}>{data.info}</h6>
              </Col>
            </Row>
          ))}
      </div>

      <div className={cx(styles.socialInfoDiv, "flexCol")}>
        <Row>
          <h2 className={cx(styles.sectionTitle, "p-0")}>Social</h2>
        </Row>

        <div className={cx(styles.wrapper, "flexCol")}>
          {Array.isArray(socialInfoData) &&
            socialInfoData.map((data) => (
              <Row key={data.id} className={cx(styles.socialInfo, "align-items-center rounded-2")}>
                <Col md='auto'>
                  <img src={data.icon} alt={`${data.title} icon`} />
                </Col>
                <Col className='p-0'>
                  <h6 className={cx(styles.socialUserName, "m-0")}>{data.username || "Kindly update your details"}</h6>
                </Col>
              </Row>
            ))}
        </div>
      </div>
    </Container>
  );
}

ProfileDetail.propTypes = {
  data: PropTypes.object,
  addressInfoData: PropTypes.array,
  socialInfoData: PropTypes.array,
  bio: PropTypes.string
};

export default ProfileDetail;
