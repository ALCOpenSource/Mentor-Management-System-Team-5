import React, { useState } from "react";
import Switch from "react-switch";
import { ReactComponent as ToggleOffIcon } from "@/assets/icons/toggle-off-icon.svg";
import { ReactComponent as ToggleOnIcon } from "@/assets/icons/toggle-on-icon.svg";

function ToggleSwitch() {
  const [checked, setChecked] = useState(false);
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };

  return (
    <Switch
      onChange={handleChange}
      checked={checked}
      handleDiameter={16}
      height={19}
      width={32}
      onColor='#058b94'
      offColor='#b3b3b3'
      checkedIcon={false}
      uncheckedIcon={false}
      checkedHandleIcon={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%"
          }}
        >
          <ToggleOnIcon />
        </div>
      }
      uncheckedHandleIcon={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%"
          }}
        >
          <ToggleOffIcon />
        </div>
      }
      className='react-switch'
    />
  );
}

export default ToggleSwitch;
