import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import cx from "classnames";
import { getProfile } from "@/redux/Profile/ProfileSlice";

import { Container, Row } from "react-bootstrap";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileDetail from "./ProfileDetail/ProfileDetail";
import styles from "./Profile.module.scss";

import instagramIcon from "@/assets/icons/instagram-icon.svg";
import linkedinIcon from "@/assets/icons/linkedin-icon.svg";
import githubIcon from "@/assets/icons/github-icon.svg";
import twitterIcon from "@/assets/icons/twitter-icon.svg";
import countriesAndFlags from "@/utils/countriesAndFlags";
import formatDate from "@/helpers/formatDate";
import arrayToString from "@/helpers/arrayToString";
import Loader from "@/components/Loader/Loader";

function Profile() {
  const dispatch = useDispatch();

  const [profileHeaderData, setProfileHeaderData] = useState({});
  const [profileDetailData, setProfileDetailData] = useState({});

  const userProfile = useSelector((state) => state.profile.getProfileData);
  const getProfileLoading = useSelector((state) => state.loading.getProfileLoading);

  useEffect(() => {
    if (Object.keys(userProfile).length > 0) {
      setProfileHeaderData({
        fullName: `${userProfile.firstName} ${userProfile.lastName}`,
        role: Array.isArray(userProfile?.roles) ? arrayToString(userProfile?.roles) : userProfile?.roles,
        profilePicture: userProfile.profilePicture,
        flagUrl: countriesAndFlags.find((item) => item.name === userProfile?.country)?.flag
      });
      setProfileDetailData({
        addressInfoData: [
          {
            id: 1,
            title: "Location:",
            info: `${userProfile.city}, ${userProfile.country}`
          },
          {
            id: 2,
            title: "Email:",
            info: userProfile?.email
          },
          {
            id: 3,
            title: "Website:",
            info: userProfile.website
          },
          {
            id: 4,
            title: "Member Since:",
            info: formatDate(userProfile.dateCreated)
          }
        ],
        socialInfoData: [
          {
            id: 1,
            title: "Instagram",
            icon: instagramIcon,
            username: userProfile.instagram
          },
          {
            id: 2,
            title: "Twitter",
            icon: twitterIcon,
            username: userProfile.twitter
          },
          {
            id: 3,
            title: "Github",
            icon: githubIcon,
            username: userProfile.github
          },
          {
            id: 4,
            title: "LinkedIn",
            icon: linkedinIcon,
            username: userProfile.linkedIn
          }
        ],
        bio: userProfile.bio
      });
    }
  }, [userProfile]);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return (
    <Container className={cx(styles.profileContainer)}>
      {getProfileLoading ? (
        <Loader />
      ) : (
        <>
          <Row className='mb-5'>
            <ProfileHeader data={profileHeaderData} />
          </Row>
          <Row>
            <ProfileDetail data={profileDetailData} />
          </Row>
        </>
      )}
    </Container>
  );
}

export default Profile;
