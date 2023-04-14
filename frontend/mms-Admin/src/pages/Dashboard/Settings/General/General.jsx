import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import cx from "classnames";
import styles from "./General.module.scss";
import Button from "@/components/Button/Button";
import InputField from "@/components/Input/Input";
import SelectField from "@/components/Select/Select";
import TextArea from "@/components/TextArea/TextArea";
import { Country, State, City } from "country-state-city";
import SuccessNotificationModal from "@/components/Modals/SuccessNotification/SuccessNotification";
import { showModal } from "@/redux/Modal/ModalSlice";

import githubIcon from "@/assets/icons/settings-github-icon.svg";
import instagramIcon from "@/assets/icons/settings-instagram-icon.svg";
import linkedinIcon from "@/assets/icons/settings-linkedin-icon.svg";
import twitterIcon from "@/assets/icons/settings-twitter-icon.svg";
import profileImage from "@/assets/images/sample-profile-image.png";

import { useForm, Controller } from "react-hook-form";
import { settingsGeneralSchema } from "@/helpers/validation";
import { yupResolver } from "@hookform/resolvers/yup";

const General = () => {
  const dispatch = useDispatch();

  // const loading = useSelector((state) => state?.loading?.saveSettingsLoading);
  const displayModal = useSelector((state) => state.modal.show);
  const modalName = useSelector((state) => state.modal.modalName);

  const socialMediaInputArray = [
    {
      name: "Github",
      placeholder: "@githubuser",
      icon: githubIcon
    },
    {
      name: "Instagram",
      placeholder: "@instagramuser",
      icon: instagramIcon
    },
    {
      name: "LinkedIn",
      placeholder: "@linkedinuser",
      icon: linkedinIcon
    },
    {
      name: "Twitter",
      placeholder: "@twitteruser",
      icon: twitterIcon
    }
  ];

  const [countries, setCountries] = useState([]);
  const [state, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const countries = Country.getAllCountries().map((country) => {
      return { value: country.isoCode, label: country.name };
    });
    setCountries(countries);
  }, []);

  const resolver = yupResolver(settingsGeneralSchema);

  const defaultValues = {
    firstName: "",
    lastName: ""
  };

  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue
  } = useForm({ defaultValues, resolver, mode: "all" });

  const handleSelectChange = (e, name) => {
    if (name === "country") {
      const country = Country.getCountryByCode(e.target.value);
      const state = State.getStatesOfCountry(country.isoCode).map((state) => {
        return { value: state.isoCode, label: state.name };
      });
      const city = City.getCitiesOfCountry(country.isoCode).map((city) => {
        return { value: city.name, label: city.name };
      });

      setCities(city);
      setStates(state.length > 0 ? state : [{ value: country.isoCode, label: country.name }]);
    }
    setValue(name, e.target.value, { shouldValidate: true });
  };

  console.log(cities, "cities");

  return (
    <div className={cx(styles.generalContainer, "flexCol")}>
      <div className={cx(styles.wrapper, styles.header)}>
        <div className={cx(styles.leftSection, styles.imageDiv)}>
          <img src={profileImage} alt='thumbnail-img' />
        </div>
        <div className={cx(styles.rightSection, styles.profilePicture)}>
          <h5 className={cx(styles.title)}>Set Profile Picture</h5>
          <Button title='Upload Picture' size='small' />
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
                label={"First Name"}
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
                label={"Last Name"}
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
                placeholder={"Your Bio"}
                label={""}
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
          <InputField label='www.example.com' />
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
                  defaultSelect={"Select Country"}
                  label={"Country"}
                  options={countries}
                  error={errors?.country && errors?.country?.message}
                  onChange={(e) => handleSelectChange(e, "country")}
                  border={"#C8C8C8"}
                  loading={countries.length > 0 ? false : true}
                />
              )}
            />
          </div>

          {/* <div className={cx(styles.cityDiv)}>
                        <label htmlFor="city" className={cx(styles.label)}>City</label>
                        <Controller
                            name="state"
                            control={control}
                            render={({ field }) => (
                                <SelectField
                                    {...field}
                                    defaultSelect={"Select State"}
                                    label={"State"}
                                    options={state}
                                    error={errors?.state && errors?.state?.message}
                                    onChange={(e) => handleSelectChange(e, "state")}
                                    border={"#C8C8C8"}
                                loading={state.length > 0 ? false : true}
                                />
                            )}
                        />
                    </div> */}

          <div className={cx(styles.cityDiv)}>
            <label htmlFor='city' className={cx(styles.label)}>
              City
            </label>
            <Controller
              name='cities'
              control={control}
              render={({ field }) => (
                <SelectField
                  {...field}
                  defaultSelect={"Select City"}
                  label={"City"}
                  options={cities}
                  error={errors?.cities && errors?.cities?.message}
                  onChange={(e) => handleSelectChange(e, "cities")}
                  border={"#C8C8C8"}
                  // loading={state.length > 0 ? false : true}
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
                  <span>{item?.name}</span>
                </div>
                <div className={cx(styles.right)}>
                  <InputField marginbottom='0' border='none' label={item?.placeholder} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={cx(styles.btnDiv, "flexRow-right-centered")}>
        <Button
          onClick={() =>
            dispatch(
              showModal({ name: "successNotification", modalData: "Profile Saved Successfully" })
            )
          }
          title='Save Changes'
        />
      </div>

      {displayModal && modalName === "successNotification" ? (
        <SuccessNotificationModal show size='md' />
      ) : null}
    </div>
  );
};

export default General;
