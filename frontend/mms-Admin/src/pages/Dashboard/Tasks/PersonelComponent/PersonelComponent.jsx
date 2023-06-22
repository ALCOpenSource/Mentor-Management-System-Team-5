import React, { useState, useEffect } from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import styles from "./PersonelComponent.module.scss";
import { ReactComponent as AddIcon } from "@/assets/icons/add-icon.svg";
import { ReactComponent as CheckIcon } from "@/assets/icons/check-icon.svg";
import { initialsCase, titleCase } from "@/helpers/textTransform";

function PersonelComponent({ data, checked, handleChecked }) {
  const [toggleIcon, setToggleIcon] = useState(false);

  useEffect(() => {
    setToggleIcon(checked);
  }, [checked]);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
    handleChecked(data?.id);
  };

  return (
    <div className={cx(styles.personelCompContainer, "flexRow-align-center")}>
      {data?.profilePicture ? (
        <img className={cx(styles.avatar)} src={data?.profilePicture} alt='user-image' />
      ) : (
        <span className={cx(styles.avatarText, "flexRow-fully-centered")}>
          {initialsCase(`${data?.firstName} ${data?.lastName}`)}
        </span>
      )}
      <div className={cx(styles.userInfo, "flexCol")}>
        <h5 className={cx(styles.name)}>{`${titleCase(data?.firstName)} ${titleCase(data?.lastName)}`}</h5>
        <p className={cx(styles.designation)}>{data?.headline}</p>
        <div className={cx(styles.positionTags, "flexRow")}>
          {data?.roles &&
            data?.roles.map((tag, index) => (
              <span key={index} className={cx(styles.tag)}>
                {tag}
              </span>
            ))}
        </div>
      </div>
      {toggleIcon ? (
        <CheckIcon className={cx(styles.icon)} onClick={() => handleToggleIcon()} />
      ) : (
        <AddIcon className={cx(styles.icon)} onClick={() => handleToggleIcon()} />
      )}
    </div>
  );
}

PersonelComponent.propTypes = {
  data: PropTypes.object.isRequired,
  checked: PropTypes.bool,
  handleChecked: PropTypes.func
};

export default PersonelComponent;
