import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import styles from "./PersonelComponent.module.scss";
import { ReactComponent as AddIcon } from "@/assets/icons/add-icon.svg";
// import { ReactComponent as CheckIcon } from "@/assets/icons/check-icon.svg";

function PersonelComponent({ data, onClick }) {
  // const [toggleIcon, setToggleIcon] = useState(false);

  return (
    <div className={cx(styles.personelCompContainer, "flexRow-align-center")}>
      <img className={cx(styles.avatar)} src={data?.image} alt='user-image' />
      <div className={cx(styles.userInfo, "flexCol")}>
        <h5 className={cx(styles.name)}>{data?.name}</h5>
        <p className={cx(styles.designation)}>{data?.designation}</p>
        <div className={cx(styles.positionTags, "flexRow")}>
          {data?.positionTags &&
            data?.positionTags.map((tag, index) => (
              <span key={index} className={cx(styles.tag)}>
                {tag}
              </span>
            ))}
        </div>
      </div>
      {/* {toggleIcon ? (
        <CheckIcon className={cx(styles.icon)} onClick={() => setToggleIcon(!toggleIcon)} />
      ) : (
        <AddIcon className={cx(styles.icon)} onClick={() => setToggleIcon(!toggleIcon)} />
      )} */}
      <AddIcon className={cx(styles.icon)} onClick={() => onClick(data)} />
    </div>
  );
}

PersonelComponent.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func
};

export default PersonelComponent;
