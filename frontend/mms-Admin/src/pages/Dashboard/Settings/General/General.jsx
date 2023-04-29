import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import cx from "classnames";
import { Country, City } from "country-state-city";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./General.module.scss";
import Button from "@/components/Button/Button";
import InputField from "@/components/Input/Input";
import SelectField from "@/components/Select/Select";
import TextArea from "@/components/TextArea/TextArea";
import SuccessNotificationModal from "@/components/Modals/SuccessNotification/SuccessNotification";
import { showModal } from "@/redux/Modal/ModalSlice";
import successNotificationImage from "@/assets/images/default-success-notification-image.png";
import { useDropzone } from "react-dropzone";
import githubIcon from "@/assets/icons/settings-github-icon.svg";
import instagramIcon from "@/assets/icons/settings-instagram-icon.svg";
import linkedinIcon from "@/assets/icons/settings-linkedin-icon.svg";
import twitterIcon from "@/assets/icons/settings-twitter-icon.svg";
import { updateProfileSchema } from "@/helpers/validation";
import { updateProfile, getProfile } from "@/redux/Settings/SettingsSlice";
import { initialsCase } from "@/helpers/textTransform";
import Loader from "@/components/Loader/Loader";

function General() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state?.loading?.updateProfileLoading);
  const userProfile = useSelector((state) => state.settings.getProfileData);
  const getProfileLoading = useSelector((state) => state?.loading?.getProfileLoading);
  const displayModal = useSelector((state) => state.modal.show);
  const modalName = useSelector((state) => state.modal.modalName);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  const socialMediaInputArray = [
    {
      key: "github",
      label: "Github",
      placeholder: "@githubuser",
      icon: githubIcon
    },
    {
      key: "instagram",
      label: "Instagram",
      placeholder: "@instagramuser",
      icon: instagramIcon
    },
    {
      key: "linkedIn",
      label: "LinkedIn",
      placeholder: "@linkedinuser",
      icon: linkedinIcon
    },
    {
      key: "twitter",
      label: "Twitter",
      placeholder: "@twitteruser",
      icon: twitterIcon
    }
  ];

  const [countries, setCountries] = useState([]);
  const [city, setCity] = useState([]);

  useEffect(() => {
    const countries = Country.getAllCountries().map((country) => {
      return { value: country.name, label: country.name };
    });
    setCountries(countries);
  }, []);

  const resolver = yupResolver(updateProfileSchema);

  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    reset
  } = useForm({ resolver, mode: "all" });

  useEffect(() => {
    const country = Country.getAllCountries().find((item) => item.name === userProfile?.country);
    const city = City.getCitiesOfCountry(country?.isoCode).map((city) => {
      return { value: city.name, label: city.name };
    });
    setCity(city);
    reset(userProfile);
  }, [reset, userProfile]);

  const handleSelectChange = (e, name) => {
    if (name === "country") {
      const country = Country.getAllCountries().find((item) => item.name === e.target.value);
      const city = City.getCitiesOfCountry(country.isoCode).map((city) => {
        return { value: city.name, label: city.name };
      });

      setCity(city);
    }
    setValue(name, e.target.value, { shouldValidate: true });
  };

  const handleUpdateProfile = async (data) => {
    const payload = {
      ...data,
      profilePicture: uploadedFile?.imagePreviewUrl ? uploadedFile?.imagePreviewUrl : data.profilePicture
    };
    let response = await dispatch(updateProfile(payload));

    if (response?.success) {
      dispatch(
        showModal({
          name: "successNotification",
          modalData: {
            title: "Profile saved successfully",
            image: successNotificationImage
          }
        })
      );
      dispatch(getProfile());
    }
  };

  const [uploadedFile, setUploadedFile] = useState({
    file: "",
    imagePreviewUrl: ""
  });

  const onDrop = useCallback((acceptedFiles) => {
    let file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUploadedFile({ file: file, imagePreviewUrl: reader.result });
    };
    reader.readAsDataURL(file);
  }, []);

  const { getRootProps } = useDropzone({ onDrop, accept: "image/*" });

  return (
    <div className={cx(styles.generalContainer, "flexCol")}>
      {getProfileLoading ? (
        <Loader />
      ) : (
        <form
          className={cx(styles.formWrapper, "flexCol")}
          onSubmit={handleSubmit((data) => handleUpdateProfile(data))}
        >
          <div className={cx(styles.wrapper, styles.header)}>
            <div className={cx(styles.leftSection, styles.imageDiv)}>
              {userProfile?.profilePicture || uploadedFile?.imagePreviewUrl ? (
                <img
                  {...getRootProps()}
                  src={uploadedFile?.imagePreviewUrl ? uploadedFile?.imagePreviewUrl : userProfile?.profilePicture}
                  alt='profile-image'
                />
              ) : (
                <span {...getRootProps()} className={cx(styles.profileImageText)}>
                  {initialsCase(
                    `${userProfile?.firstName ? userProfile?.firstName : ""} ${
                      userProfile?.lastName ? userProfile?.lastName : ""
                    }`
                  )}
                </span>
              )}
            </div>
            <div className={cx(styles.rightSection, styles.profilePicture)}>
              <h5 className={cx(styles.title)}>Set Profile Picture</h5>
              <Button {...getRootProps()} title='Upload Picture' size='small' />
            </div>
          </div>

          <div className={cx(styles.wrapper, styles.nameDiv)}>
            <div className={cx(styles.leftSection, styles.titleDiv)}>
              <h6 className={cx(styles.title)}>Name</h6>
            </div>
            <div className={cx(styles.rightSection, styles.nameDetails)}>
              <Controller
                name='firstName'
                control={control}
                render={({ field }) => (
                  <InputField
                    {...field}
                    label='First Name'
                    placeholder=''
                    type='text'
                    error={errors?.firstName && errors?.firstName?.message}
                  />
                )}
              />

              <Controller
                name='lastName'
                control={control}
                render={({ field }) => (
                  <InputField
                    {...field}
                    label='Last Name'
                    placeholder=''
                    type='text'
                    error={errors?.lastName && errors?.lastName?.message}
                  />
                )}
              />
            </div>
          </div>

          <div className={cx(styles.wrapper, styles.bioDiv)}>
            <div className={cx(styles.leftSection, styles.titleDiv)}>
              <h6 className={cx(styles.title)}>About</h6>
            </div>
            <div className={cx(styles.rightSection, styles.bioDetails)}>
              <Controller
                name='bio'
                control={control}
                render={({ field }) => (
                  <TextArea
                    {...field}
                    placeholder='Your Bio'
                    label=''
                    minHeight='150px'
                    error={errors?.bio && errors?.bio?.message}
                  />
                )}
              />
            </div>
          </div>

          <div className={cx(styles.wrapper, styles.websiteDiv)}>
            <div className={cx(styles.leftSection, styles.titleDiv)}>
              <h6 className={cx(styles.title)}>Website</h6>
            </div>
            <div className={cx(styles.rightSection, styles.websiteDetails)}>
              <Controller
                name='website'
                control={control}
                render={({ field }) => (
                  <InputField
                    {...field}
                    label='www.example.com'
                    placeholder=''
                    type='text'
                    error={errors?.website && errors?.website?.message}
                  />
                )}
              />
            </div>
          </div>

          <div className={cx(styles.wrapper, styles.countryDiv)}>
            <div className={cx(styles.leftSection, styles.titleDiv)}>
              <h6 className={cx(styles.title)}>Country</h6>
            </div>
            <div className={cx(styles.rightSection, styles.countryDetails)}>
              <div className={cx(styles.countryDiv)}>
                <Controller
                  name='country'
                  control={control}
                  render={({ field }) => (
                    <SelectField
                      {...field}
                      defaultSelect='Select Country'
                      label=''
                      options={countries}
                      error={errors?.country && errors?.country?.message}
                      onChange={(e) => handleSelectChange(e, "country")}
                      border='#C8C8C8'
                      loading={!(countries.length > 0)}
                    />
                  )}
                />
              </div>

              <div className={cx(styles.cityDiv)}>
                <label htmlFor='city' className={cx(styles.label)}>
                  City
                </label>
                <Controller
                  name='city'
                  control={control}
                  render={({ field }) => (
                    <SelectField
                      {...field}
                      defaultSelect='Select City'
                      label=''
                      options={city}
                      error={errors?.city && errors?.city?.message}
                      onChange={(e) => handleSelectChange(e, "city")}
                      border='#C8C8C8'
                    />
                  )}
                />
              </div>
            </div>
          </div>

          <div className={cx(styles.wrapper, styles.socialMediaDiv)}>
            <div className={cx(styles.leftSection, styles.titleDiv)}>
              <h6 className={cx(styles.title)}>Social</h6>
            </div>
            <div className={cx(styles.rightSection, styles.socialMediaDetails)}>
              {socialMediaInputArray.map((item, index) => {
                return (
                  <div className={cx(styles.infoWrapper, "flexRow-align-center")} key={index}>
                    <div className={cx(styles.left, "flexRow-fully-centered")}>
                      <span>
                        <img src={item?.icon} alt='logo' />
                      </span>
                      <span>{item?.label}</span>
                    </div>
                    <div className={cx(styles.right)}>
                      <Controller
                        name={item?.key}
                        control={control}
                        render={({ field }) => (
                          <InputField
                            {...field}
                            placeholder=''
                            type='text'
                            marginbottom='0'
                            border='none'
                            label={item?.placeholder}
                          />
                        )}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={cx(styles.btnDiv, "flexRow-right-centered")}>
            <Button
              loading={loading}
              disabled={loading}
              onClick={handleSubmit((data) => handleUpdateProfile(data))}
              title='Save Changes'
            />
          </div>
        </form>
      )}
      {displayModal && modalName === "successNotification" ? <SuccessNotificationModal show size='md' /> : null}
    </div>
  );
}

export default General;
