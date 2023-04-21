import React from "react";
import cx from "classnames";
import styles from "./Profile.detail.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import instagramIcon from "@/assets/icons/instagram-icon.svg";
import linkedinIcon from "@/assets/icons/linkedin-icon.svg";
import githubIcon from "@/assets/icons/github-icon.svg";
import twitterIcon from "@/assets/icons/twitter-icon.svg";

const ProfileDetail = () => {
  return (
    <Container className={cx(styles.profileDetailContainer, "p-4 border rounded-2")}>
      <Row className='mb-2'>
        <h2 className={cx(styles.title, "p-0")}>About</h2>
      </Row>
      <Row>
        <p className={cx(styles.bio, "mb-3 p-3")}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum cumque, tempore
          soluta debitis delectus tenetur tempora rem, adipisci facere dolore necessitatibus
          incidunt fuga harum similique unde nobis voluptates voluptate. Soluta dolor officia
          laboriosam omnis quisquam atque nostrum iusto natus quae nesciunt tempora sequi impedit
          minus distinctio, expedita veritatis nemo voluptatibus exercitationem quo eos error.
          Maxime et quae itaque sit quod?
        </p>
      </Row>
      <Row className={cx(styles.addressInfo, "align-items-center mb-3")}>
        <Col md='auto'>
          <h6 className={cx(styles.title, "m-0")}>Location:</h6>
        </Col>
        <Col>
          <h6 className={cx(styles.info, "m-0")}>Lagos, Nigeria</h6>
        </Col>
      </Row>
      <Row className={cx(styles.addressInfo, "align-items-center mb-3")}>
        <Col md='auto'>
          <h6 className={cx(styles.title, "m-0")}>Email:</h6>
        </Col>
        <Col>
          <h6 className={cx(styles.info, "m-0")}>user@example.com</h6>
        </Col>
      </Row>
      <Row className={cx(styles.addressInfo, "align-items-center mb-3")}>
        <Col md='auto'>
          <h6 className={cx(styles.title, "m-0")}>Website:</h6>
        </Col>
        <Col>
          <h6 className={cx(styles.info, "m-0")}>www.example.com</h6>
        </Col>
      </Row>
      <Row className={cx(styles.addressInfo, "align-items-center mb-4")}>
        <Col md='auto'>
          <h6 className={cx(styles.title, "m-0")}>Member Since:</h6>
        </Col>
        <Col>
          <h6 className={cx(styles.info, "m-0")}>January 1, 2023</h6>
        </Col>
      </Row>
      <Row className='mb-3'>
        <h2 className={cx(styles.title, "p-0")}>Social</h2>
      </Row>
      <Row className='mb-3'>
        <Col className={cx(styles.socialInfo, "me-2 p-3 rounded-2")}>
          <Container className='p-0'>
            <Row>
              <Col md='auto'>
                <img src={instagramIcon} alt='instagram icon' />
              </Col>
              <Col>
                <h6 className={cx(styles.socialUserName, "m-0")}>@Peculiah.umeh</h6>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col className={cx(styles.socialInfo, "ms-2 p-3 rounded-2")}>
          <Container className='p-0'>
            <Row>
              <Col md='auto'>
                <img src={twitterIcon} alt='twitter icon' />
              </Col>
              <Col>
                <h6 className={cx(styles.socialUserName, "m-0")}>@Peculiah.umeh</h6>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col className={cx(styles.socialInfo, "me-2 p-3 rounded-2")}>
          <Container className='p-0'>
            <Row>
              <Col md='auto'>
                <img src={githubIcon} alt='github icon' />
              </Col>
              <Col>
                <h6 className={cx(styles.socialUserName, "m-0")}>@Peculiah.umeh</h6>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col className={cx(styles.socialInfo, "ms-2 p-3 rounded-2")}>
          <Container className='p-0'>
            <Row>
              <Col md='auto'>
                <img src={linkedinIcon} alt='linkedin icon' />
              </Col>
              <Col>
                <h6 className={cx(styles.socialUserName, "m-0")}>@Peculiah.umeh</h6>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileDetail;
